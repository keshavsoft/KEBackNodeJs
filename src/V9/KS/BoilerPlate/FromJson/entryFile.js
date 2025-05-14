const vscode = require('vscode');
const fse = require('fs-extra');
const path = require('path');

const CommonRegisterCommand = "KS.BoilerPlate.FromJson";

const { StartFunc: StartFuncFromForV1 } = require("./ForV1/entryFile");
const { StartFunc: StartFuncFromForV2Secured } = require("./ForV2Secured/entryFile");

const { StartFunc: StartFuncFromOpenApp } = require("./openApp");
const { StartFunc: StartFuncFromChecks } = require('./Checks/forSchemaJson');
const { StartFunc: StartFuncFromChecksOpenApp } = require("./Checks/openApp");

const { StartFunc: StartFuncFromReadEnvFile } = require("./readEnvFile");
const { StartFunc: StartFuncFromreadJsonSchema } = require("./readJsonSchema");

const StartFunc = () => {
    vscode.commands.registerCommand(CommonRegisterCommand, LocalFuncToActivate);
};

const LocalFuncToActivate = async () => {
    const LocalToPath = LocalFuncGetWorkSpaceFolder();

    await LocalFuncFirstCopy({ inToPath: LocalToPath });

    const LocalEnvFileAsJson = StartFuncFromReadEnvFile({ inRootPath: LocalToPath });
    const LocalDataPath = LocalEnvFileAsJson.DataPath;
    const LocalPortNumber = LocalEnvFileAsJson.PORT;

    const LocalJsonSchema = StartFuncFromreadJsonSchema({ inRootPath: LocalToPath });
    const LocalTableName = LocalJsonSchema.TableName;
    const LocalColumnsAsArray = LocalJsonSchema.Columns;

    await StartFuncFromForV1({
        inTableName: LocalTableName,
        inColumnsAsArray: LocalColumnsAsArray,
        inDataPath: LocalDataPath,
        inPortNumber: LocalPortNumber,
        inToPath: LocalToPath
    });

    await StartFuncFromForV2Secured({
        inTableName: LocalTableName,
        inColumnsAsArray: LocalColumnsAsArray,
        inDataPath: LocalDataPath,
        inPortNumber: LocalPortNumber,
        inToPath: LocalToPath
    });

    vscode.window.showInformationMessage(`BoilerPlate code to: ${LocalToPath}`);

    await StartFuncFromOpenApp({ inToPath: LocalToPath });
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

const LocalFuncFirstCopy = async ({ inToPath }) => {
    try {
        const LocalToPath = inToPath;
        const LocalIfExists = StartFuncFromChecks({ inRootPath: LocalToPath });

        if (LocalIfExists === false) {
            let GoToHelp = 'Create schema.json';

            vscode.window.showInformationMessage('Click for more Info', GoToHelp)
                .then(selection => {
                    if (selection === GoToHelp) {
                        fse.writeFileSync(`${LocalToPath}/schema.json`, JSON.stringify({
                            TableName: "",
                            Columns: []
                        }));

                        StartFuncFromChecksOpenApp({ inToPath: LocalToPath });
                    };
                });

            return;
        };

        const LocalFromPath = path.join(__dirname, "copyCode");

        await fse.copy(LocalFromPath, LocalToPath);
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    };
};

module.exports = { StartFunc };