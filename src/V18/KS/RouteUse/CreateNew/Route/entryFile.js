const fse = require('fs-extra');

const { FindLastIndex: StartFuncFromRouterDotLine } = require("./routerDotLine");
const { FindLastIndex: StartFuncFromImportLine } = require("./importLine");

const StartFunc = ({ inLinesArray, inEditorPath, inNewRoute }) => {
    try {
        const selectedFolder = inEditorPath;
        let LocalLines = inLinesArray;

        StartFuncFromImportLine({ inLinesArray: LocalLines, inNewRoute });
        StartFuncFromRouterDotLine({ inLinesArray: LocalLines, inNewRoute });

        LocalFuncWriteFile({ inLinesArray: LocalLines, inEditorPath: selectedFolder });
    } catch (error) {
        return error.message;
    };
};

const LocalFuncWriteFile = ({ inLinesArray, inEditorPath }) => {
    let LocalLines = inLinesArray;

    const content = LocalLines.join('\n');

    const activeFileFolderPath = inEditorPath;

    fse.writeFileSync(activeFileFolderPath, content, 'utf-8');
};

module.exports = { StartFunc };
