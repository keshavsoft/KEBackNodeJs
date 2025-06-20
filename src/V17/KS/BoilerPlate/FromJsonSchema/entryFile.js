const vscode = require('vscode');

const CommonRegisterCommand = "KS.BoilerPlate.FromJsonSchema";

const { StartFunc: StartFuncFromForV1 } = require("./ForV1/entryFile");

const { StartFunc: StartFuncFromOpenApp } = require("./openApp");

const { StartFunc: StartFuncFromReadEnvFile } = require("./readEnvFile");
// const { StartFunc: StartFuncFromFirstCopy } = require("./firstCopy");

const { StartFunc: StartFuncFromFirstCopy } = require("./FirstCopy/entryFile");
const { StartFunc: StartFuncFromReadSchema } = require("./ReadSchema/entryFile");

// pull the columns schema from the json file referred from schema.json

const StartFunc = () => {
    vscode.commands.registerCommand(CommonRegisterCommand, LocalFuncToActivate);
};

const LocalFuncToActivate = async () => {
    const LocalToPath = LocalFuncGetWorkSpaceFolder();

    const LocalFromCopy = await StartFuncFromFirstCopy({ inToPath: LocalToPath });

    if (LocalFromCopy === false) {
        return false;
    };

    const LocalEnvFileAsJson = StartFuncFromReadEnvFile({ inRootPath: LocalToPath });
    const LocalDataPath = LocalEnvFileAsJson.DataPath;
    const LocalPortNumber = LocalEnvFileAsJson.PORT;

    const LocalJsonSchema = StartFuncFromReadSchema({ inRootPath: LocalToPath });
    const LocalTableName = LocalJsonSchema.TableName;
    const LocalColumnsAsArray = LocalJsonSchema.Columns;
    const LocalData = LocalJsonSchema.Data;
    const LocalColumnsWithSchema = LocalJsonSchema.ColumnsWithSchema;

    await StartFuncFromForV1({
        inTableName: LocalTableName,
        inColumnsAsArray: LocalColumnsAsArray,
        inDataPath: LocalDataPath,
        inPortNumber: LocalPortNumber,
        inToPath: LocalToPath,
        inColumnsWithSchema: LocalColumnsAsArray,
        inData: LocalData
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

module.exports = { StartFunc };