// extension.js
const vscode = require('vscode');

const { StartFunc: StartFuncV20 } = require('./src/V20/entryFile');

const activate = async (context) => {
    console.log('Congratulations, your extension "create-folder" is now active!');
    StartFuncV20();

    vscode.commands.registerCommand("extension.Path", () => {
        vscode.window.showInformationMessage(__dirname);
    });
};

function deactivate() { };

module.exports = {
    activate,
    deactivate,
};