const vscode = require('vscode');
const fse = require('fs-extra');

const { StartFunc: StartFuncFromChecksOpenApp } = require("./Checks/openApp");

const StartFunc = async ({ inToPath }) => {
    const LocalToPath = inToPath;
    let GoToHelp = 'Create schema.json';

    vscode.window.showInformationMessage('Click for more Info', GoToHelp)
        .then(selection => {
            if (selection === GoToHelp) {
                fse.writeFileSync(`${LocalToPath}/schema.json`, JSON.stringify({
                    TableName: "Table1",
                    Columns: [{
                        ColumnName: "Col1",
                        unique: true,
                        type: "STRING"
                    },
                    {
                        ColumnName: "Col2",
                        unique: false,
                        type: "NUMBER"
                    }]
                }));

                StartFuncFromChecksOpenApp({ inToPath: LocalToPath });
            };
        });
};

module.exports = { StartFunc };