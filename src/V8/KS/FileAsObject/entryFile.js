const { StartFunc: StartFuncFromCreateFileWithContent } = require("./CreateFileWithContent/entryFile");

const StartFunc = () => {
    StartFuncFromCreateFileWithContent();
};

module.exports = { StartFunc };