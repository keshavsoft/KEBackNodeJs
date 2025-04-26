const { StartFunc: StartFuncFromCreateFile } = require("./CreateFile/entryFile");
// const { StartFunc: StartFuncFromReadFile } = require("./ReadFile/entryFile");
// const { StartFunc: StartFuncFromDeleteFile } = require("./DeleteFile/entryFile");

const StartFunc = () => {
    StartFuncFromCreateFile();
    // StartFuncFromReadFile();
    // StartFuncFromDeleteFile();
};

module.exports = { StartFunc };