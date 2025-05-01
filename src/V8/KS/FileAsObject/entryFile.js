const { StartFunc: StartFuncFromCreateFileWithContent } = require("./CreateFileWithContent/entryFile");
const { StartFunc: StartFuncFromCreateFile } = require("./CreateFile/entryFile");

const StartFunc = () => {
    StartFuncFromCreateFileWithContent();
    StartFuncFromCreateFile();
};

module.exports = { StartFunc };