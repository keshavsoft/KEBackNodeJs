const vscode = require('vscode');

const CommonRegisterCommand = "KS.Append.WithSubTable";

const { StartFunc: StartFuncFromForMaxVersion } = require("./ForMaxVersion/entryFile");

const { StartFunc: StartFuncFromOpenApp } = require("./openApp");

const { StartFunc: StartFuncFromReadEnvFile } = require("./readEnvFile");

const { StartFunc: StartFuncFromFirstCopy } = require("./FirstCopy/entryFile");
const { StartFunc: StartFuncFromReadSchema } = require("./ReadSchema/entryFile");
const { StartFunc: StartFuncFromGetMaxVersion } = require("./getMaxVersion");
const { StartFunc: StartFuncrunNodeApp } = require("./ServerRun");

// pull the columns schema from the json file referred from schema.json

const StartFunc = () => {
    vscode.commands.registerCommand(CommonRegisterCommand, LocalFuncToActivate);
};

const LocalFuncToActivate = async () => {
    const LocalToPath = LocalFuncGetWorkSpaceFolder();
    let LocalVersion = "V1";

    const LocalFromMaxVersion = await StartFuncFromGetMaxVersion({ inToPath: LocalToPath });

    if (LocalFromMaxVersion === 0) {
        const LocalFromCopy = await StartFuncFromFirstCopy({ inToPath: LocalToPath });

        if (LocalFromCopy === false) {
            return false;
        };
    } else {
        LocalVersion = `V${LocalFromMaxVersion}`;
    };

    const LocalEnvFileAsJson = StartFuncFromReadEnvFile({ inRootPath: LocalToPath });
    const LocalDataPath = LocalEnvFileAsJson.DataPath;
    const LocalPortNumber = LocalEnvFileAsJson.PORT;

    const LocalJsonSchema = StartFuncFromReadSchema({ inRootPath: LocalToPath });
    const LocalTableName = LocalJsonSchema.TableName;
    const LocalColumnsAsArray = LocalJsonSchema.Columns;
    const LocalData = LocalJsonSchema.Data;
    const LocalColumnsWithSchema = LocalJsonSchema.ColumnsWithSchema;

    await StartFuncFromForMaxVersion({
        inTableName: LocalTableName,
        inColumnsAsArray: LocalColumnsAsArray,
        inDataPath: LocalDataPath,
        inPortNumber: LocalPortNumber,
        inToPath: LocalToPath,
        inColumnsWithSchema: LocalColumnsWithSchema,
        inData: LocalData,
        inVersion: LocalVersion
    });

    vscode.window.showInformationMessage(`BoilerPlate code to: ${LocalToPath}`);

    await StartFuncFromOpenApp({ inToPath: LocalToPath });
    StartFuncrunNodeApp(LocalToPath)
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