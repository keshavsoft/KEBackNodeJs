const { StartFunc: StartFuncFromCreateFile } = require("./CreateFile/entryFile");
const { StartFunc: StartFuncFromReadFile } = require("./ReadFile/entryFile");

const StartFunc = () => {
    StartFuncFromCreateFile();
    StartFuncFromReadFile();
};

module.exports = { StartFunc };