const fse = require('fs-extra');
const path = require('path');

const { StartFunc: ImportLine } = require("./importLine");
const { StartFunc: RouterDotLine } = require("./routerDotLine");
const { StartFunc: FileRead } = require("../FileRead");
const { updateServerFile: FileReadupdateServerFile } = require("./app/server");

const StartFunc = async ({ inEditorPath, inNewRoute ,inVersion}) => {
    const fromPath = path.resolve(__dirname, "..", "..", "CopyCode", "V1");
    const appJsPath = path.resolve(inEditorPath, '..', '..', 'app.js');
    const toPath = path.resolve(inEditorPath, "..");

    await fse.copy(fromPath, toPath);

    try {
        const lines = await FileRead({ inFileName: inEditorPath });
        ImportLine({ inLinesArray: lines, inNewRoute });
        RouterDotLine({ inLinesArray: lines, inNewRoute });
        writeFile(lines, inEditorPath);
        FileReadupdateServerFile({
            filePath: appJsPath,
            newVersion: inVersion
        });

    } catch (err) {
        return err.message;
    }
};

const writeFile = (lines, filePath) => {
    fse.writeFileSync(filePath, lines.join('\n'), 'utf-8');
};

module.exports = { StartFunc };
