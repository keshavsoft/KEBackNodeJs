const vscode = require('vscode');
const fse = require('fs-extra');
const path = require('path');

const { StartFunc: StartFuncFromChecks } = require('./Checks/forSchemaJson');
const { StartFunc: StartFuncFromChecksOpenApp } = require("./Checks/openApp");

const StartFunc = async ({ inToPath }) => {
    try {
        const LocalToPath = inToPath;
        const LocalIfExists = StartFuncFromChecks({ inRootPath: LocalToPath });

        if (LocalIfExists === false) {
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

            return await false;
        };

        const LocalFromPath = path.join(__dirname, "copyCode");

        await fse.copy(LocalFromPath, LocalToPath);

        return await true;
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    };
};

module.exports = { StartFunc };