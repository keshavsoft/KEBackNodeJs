const { StartFunc: StartFuncFromCreateFile } = require("./Create/entryFile");
const { StartFunc: StartFuncFromCreateFileWithContent } = require("./WithContent/entryFile");
const { StartFunc: StartFuncFromDelete } = require("./Delete/entryFile");

const StartFunc = () => {
    StartFuncFromCreateFile();
    StartFuncFromCreateFileWithContent();
    StartFuncFromDelete();
};

module.exports = { StartFunc };