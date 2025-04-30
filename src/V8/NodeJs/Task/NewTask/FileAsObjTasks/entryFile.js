const { StartFunc: StartFuncFromReadFile } = require("./ReadContent/entryFile");
const { StartFunc: StartFuncFromInsertContent } = require("./InsertContent/entryFile");

const StartFunc = () => {
    StartFuncFromReadFile();
    StartFuncFromInsertContent();
};

module.exports = { StartFunc };