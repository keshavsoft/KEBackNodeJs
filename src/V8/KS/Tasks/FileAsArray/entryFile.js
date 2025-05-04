const { StartFunc: StartFuncFromCreateFile } = require("./Create/entryFile");

const StartFunc = () => {
    StartFuncFromCreateFile();
};

module.exports = { StartFunc };