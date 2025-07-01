const vscode = require('vscode');

const { StartFunc: StartFuncFromChecksOpenApp } = require("../Checks/openApp");
const { StartFunc: StartFuncFromInsertToFile } = require("./insertToFile");

const StartFunc = async ({ inToPath }) => {
    const LocalToPath = inToPath;
    let GoToHelp = 'Create schema.json';

    vscode.window.showInformationMessage('Click for more Info', GoToHelp)
        .then(selection => {
            if (selection === GoToHelp) {
                StartFuncFromInsertToFile({ inToPath });

                StartFuncFromChecksOpenApp({ inToPath: LocalToPath });
            };
        });
};

module.exports = { StartFunc };