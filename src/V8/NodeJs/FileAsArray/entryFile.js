const { StartFunc: StartFuncFromCreateFile } = require("./Create/entryFile");
const { StartFunc: StartFuncFromCreateFileWithContent } = require("./WithContent/entryFile");

const StartFunc = () => {
    StartFuncFromCreateFile();
    StartFuncFromCreateFileWithContent();
};

module.exports = { StartFunc };