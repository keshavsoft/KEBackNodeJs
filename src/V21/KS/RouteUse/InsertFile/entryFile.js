const vscode = require('vscode');

const CommonRegisterCommand = "KS.RouteUse.InsertFile";

const { getSelectedFolderPath } = require("./getSelectedFolderPath");
const { StartFunc: StartFuncFromCreateFolder } = require("./createFolder");
const { StartFunc: StartFuncFromCreateRouteFile } = require("./createRouteFile");
const { StartFunc: StartFuncFromToActiveEditor } = require("./ToActiveEditor/entryFile");
const { StartFunc: StartFuncFromOpenRouteFile } = require("./openRouteFile");

const StartFunc = () => {
    vscode.commands.registerCommand(CommonRegisterCommand, LocalFuncToActivate);
};

const LocalFuncToActivate = async () => {
    try {
        const selectedFolder = await getSelectedFolderPath();

        if (!selectedFolder) throw new Error('No folder selected, and no active file found in the workspace.');

        const LocalRouteNeeded = await vscode.window.showInputBox({ prompt: 'Enter the new end point' });

        if (!LocalRouteNeeded) throw new Error('New end point was not provided.');

        StartFuncFromCreateFolder({
            inSelectedFolderPath: selectedFolder,
            inRouteNeeded: LocalRouteNeeded
        });

        StartFuncFromCreateRouteFile({
            inSelectedFolderPath: selectedFolder,
            inRouteNeeded: LocalRouteNeeded
        });

        StartFuncFromToActiveEditor({
            inEndPointNeeded: LocalRouteNeeded
        });

        StartFuncFromOpenRouteFile({
            inToPath: selectedFolder,
            inRouteNeeded: LocalRouteNeeded
        })

        vscode.window.showInformationMessage(`Folder created and routes.js empty inserted to: ${LocalRouteNeeded}`);
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    };
};

module.exports = { StartFunc };