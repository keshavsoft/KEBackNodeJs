const { StartFunc: StartFuncFromCreateFile } = require("./Create/entryFile");
const { StartFunc: StartFuncFromDelete } = require("./Delete/entryFile");
const { StartFunc: StartFuncFromWithContent } = require("./WithContent/entryFile");

const StartFunc = () => {
    StartFuncFromCreateFile();
    StartFuncFromDelete();
    StartFuncFromWithContent();
};

module.exports = { StartFunc };