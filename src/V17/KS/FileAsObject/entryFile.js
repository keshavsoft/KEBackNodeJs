const { StartFunc: StartFuncFromCreateFileWithContent } = require("./CreateFileWithContent/entryFile");
const { StartFunc: StartFuncFromCreateFile } = require("./CreateFile/entryFile");
const { StartFunc: StartFuncFromDeleteFile } = require("./DeleteFile/entryFile");

const StartFunc = () => {
    StartFuncFromCreateFileWithContent();
    StartFuncFromCreateFile();
    StartFuncFromDeleteFile();
};

module.exports = { StartFunc };