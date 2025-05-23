// const { StartFunc: StartFuncFromCreateNew } = require("./CreateNew/entryFile");
const { StartFunc: StartFuncFromInsertFile } = require("./InsertFile/entryFile");

const StartFunc = () => {
    // StartFuncFromCreateNew();
    StartFuncFromInsertFile();
};

module.exports = { StartFunc };
