const vscode = require('vscode');
const fse = require('fs-extra');
const path = require('path');

const CommonRegisterCommand = "KS.BoilerPlate.FromJson";

const { StartFunc: StartFuncFromOpenApp } = require("./openApp");
const { StartFunc: StartFuncFromReadEnvFile } = require("./readEnvFile");
const { StartFunc: StartFuncFromreadJsonSchema } = require("./readJsonSchema");
const { StartFunc: StartFuncFromRouteUse } = require("./RouteUse/entryFile");
const { StartFunc: StartFuncFromAlterFiles } = require('./AlterFiles/entryFile');
const { StartFunc: StartFuncFromChecks } = require('./Checks/forSchemaJson');
const { StartFunc: StartFuncFromChecksOpenApp } = require("./Checks/openApp");

const StartFunc = () => {
    vscode.commands.registerCommand(CommonRegisterCommand, LocalFuncToActivate);
};

const LocalFuncToActivate = async () => {
    try {
        const LocalToPath = LocalFuncGetWorkSpaceFolder();
        const LocalIfExists = StartFuncFromChecks({ inRootPath: LocalToPath });

        if (LocalIfExists === false) {
            let GoToHelp = 'Create schema.json';

            vscode.window.showInformationMessage('Click for more Info', GoToHelp)
                .then(selection => {
                    if (selection === GoToHelp) {
                        fse.writeFileSync(`${LocalToPath}/schema.json`, JSON.stringify({ TableName: "" }));

                        StartFuncFromChecksOpenApp({ inToPath: LocalToPath });
                    };
                });

            return;
        };

        const LocalFromPath = path.join(__dirname, "copyCode");

        await fse.copy(LocalFromPath, LocalToPath);

        const LocalFromTablePath = path.join(__dirname, "TableName");

        const LocalEnvFileAsJson = StartFuncFromReadEnvFile({ inRootPath: LocalToPath });

        const LocalJsonSchema = StartFuncFromreadJsonSchema({ inRootPath: LocalToPath });
        const LocalTableName = LocalJsonSchema.TableName;

        await fse.copy(LocalFromTablePath, `${LocalToPath}/V1/${LocalTableName}`);

        StartFuncFromRouteUse({
            inEditorPath: `${LocalToPath}/V1/routes.js`,
            inNewRoute: LocalTableName
        });

        await StartFuncFromAlterFiles({
            inEditorPath: LocalToPath,
            inTableName: LocalTableName,
            inDataPath: LocalEnvFileAsJson.DataPath,
            inPortNumber: LocalEnvFileAsJson.PORT
        });

        vscode.window.showInformationMessage(`BoilerPlate code to: ${LocalToPath}`);

        StartFuncFromOpenApp({ inToPath: LocalToPath });
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    };
};

const LocalFuncGetWorkSpaceFolder = () => {
    if (vscode.workspace.workspaceFolders) {
        const rootUri = vscode.workspace.workspaceFolders[0].uri;
        const rootPath = rootUri.fsPath; // Get the file path
        return rootPath;
    } else {
        console.log("No workspace folders found.");
    };
};

module.exports = { StartFunc };