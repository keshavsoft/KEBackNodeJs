const vscode = require('vscode');

const CommonRegisterCommand = "KS.BoilerPlate.FromArray.OnlyBackEnd";

const { StartFunc: StartFuncFromForMaxVersion } = require("./ForMaxVersion/entryFile");

const { StartFunc: StartFuncFromOpenApp } = require("./openApp");

const { StartFunc: StartFuncFromReadEnvFile } = require("./readEnvFile");

const { StartFunc: StartFuncFromFirstCopy } = require("./FirstCopy/entryFile");

const { StartFunc: StartFuncFromGetMaxVersion } = require("./getMaxVersion");
const { StartFunc: StartFuncrunNodeApp } = require("./ServerRun");

const { updateServerFile: updateServerFileFromAppFile } = require("./AppFile/entryFile");

// pull the columns schema from the json file referred from schema.json

const StartFunc = () => {
    vscode.commands.registerCommand(CommonRegisterCommand, LocalFuncToActivate);
};

const LocalFuncToActivate = async () => {
    const LocalToPath = LocalFuncGetWorkSpaceFolder();
    let LocalVersion = "V1";

    const LocalEnvFileAsJson = StartFuncFromReadEnvFile({ inRootPath: LocalToPath });

    if (LocalEnvFileAsJson == null) {
        return false
    };

    const LocalDataPath = LocalEnvFileAsJson.DataPath ? LocalEnvFileAsJson.DataPath : "";
    const LocalPortNumber = LocalEnvFileAsJson.PORT ? LocalEnvFileAsJson.PORT : "";

    const LocalFromCopy = await StartFuncFromFirstCopy({ inToPath: LocalToPath });

    await StartFuncFromForMaxVersion({
        inDataPath: LocalDataPath,
        inPortNumber: LocalPortNumber,
        inToPath: LocalToPath,
        inVersion: LocalVersion
    });

    updateServerFileFromAppFile({
        filePath: `${LocalToPath}/app.js`,
        newVersion: LocalVersion,
        inToPath: LocalToPath
    });

    vscode.window.showInformationMessage(`BoilerPlate code to: ${LocalToPath}`);

    await StartFuncFromOpenApp({ inToPath: LocalToPath });
    StartFuncrunNodeApp(LocalToPath)
};

const LocalFuncForMaxVersion = async ({ inVersionStart }) => {
    const LocalToPath = LocalFuncGetWorkSpaceFolder();
    let LocalVersion = `${inVersionStart}1`;

    const LocalFromMaxVersion = await StartFuncFromGetMaxVersion({
        inToPath: LocalToPath,
        inVersionStart
    });

    if (LocalFromMaxVersion === 0) {
        const LocalFromCopy = await StartFuncFromFirstCopy({ inToPath: LocalToPath });

        if (LocalFromCopy === false) {
            return false;
        };
    } else {
        LocalVersion = `${inVersionStart}${LocalFromMaxVersion}`;
    };

    return LocalVersion;
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