const vscode = require('vscode');
const fse = require('fs-extra');

const { StartFunc: StartFuncFromRoute } = require("./Route/entryFile");
const { StartFunc: StartFuncFromRouteFornewTable } = require("./RouteFornewTable/entryFile");
const { StartFunc: StartFuncFileRead } = require("./FileRead");

const StartFunc = async ({ inEditorPath, inNewRoute, inVersion }) => {
    const LocalEditorPath = inEditorPath;
    const LocalEndPointNeeded = inNewRoute;

    let LocalLines = await StartFuncFileRead({ inFileName: LocalEditorPath });
    if (fse.existsSync(LocalEditorPath)) {


        const LocalFindEndPoint = LocalFuncCheckOldEndPoints({
            inLinesArray: LocalLines,
            inNewRoute: LocalEndPointNeeded
        });

        if (LocalFindEndPoint) {
            vscode.window.showInformationMessage(`New end point: ${LocalEndPointNeeded} is already in the file.`);
            return false;
        };

        StartFuncFromRoute({
            inLinesArray: LocalLines, inEditorPath: LocalEditorPath,
            inNewRoute: LocalEndPointNeeded
        });

        vscode.window.showInformationMessage(`Folder created and contents copied to: ${LocalEndPointNeeded}`);
    } else {
        StartFuncFromRouteFornewTable({
            inEditorPath: LocalEditorPath,
            inNewRoute: LocalEndPointNeeded,
            inVersion
        });
    };
};

const LocalFuncCheckOldEndPoints = ({ inLinesArray, inNewRoute }) => {
    let LocalLines = inLinesArray;
    const LocalNewRoute = inNewRoute;

    let LocalFilteredRows = LocalLines.filter((element) => element.startsWith("router.use("));
    let LocalFind = LocalFilteredRows.find((element) => element.indexOf(LocalNewRoute) >= 0);

    return LocalFind === undefined ? false : true;
};

module.exports = { StartFunc };
