const vscode = require('vscode');
const fse = require('fs-extra');
const path = require('path');

const CommonRegisterCommand = "KS.BoilerPlate.ArrayAndContent";
const { StartFunc: StartFuncFromOpenApp } = require("./openApp");

const StartFunc = () => {
    vscode.commands.registerCommand(CommonRegisterCommand, LocalFuncToActivate);
};

const LocalFuncToActivate = async () => {
    try {
        const LocalFromPath = path.join(__dirname, "copyCode");
        const LocalToPath = LocalFuncGetWorkSpaceFolder();

        await fse.copy(LocalFromPath, LocalToPath);

        vscode.window.showInformationMessage(`BoilerPlate code to: ${LocalToPath}`);
        // const filePath = `${LocalToPath}/app.js`;
        StartFuncFromOpenApp({ inToPath: LocalToPath });

        // var openPath = vscode.Uri.file(filePath);
        // vscode.workspace.openTextDocument(openPath).then(doc => {
        //     vscode.window.showTextDocument(doc).then(editor => {
        //         // Line added - by having a selection at the same position twice, the cursor jumps there
        //         // editor.selections = [new vscode.Selection(pos1, pos1)];

        //         // // And the visible range jumps there too
        //         // var range = new vscode.Range(pos1, pos1);
        //         // editor.revealRange(range);
        //     });
        // });

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