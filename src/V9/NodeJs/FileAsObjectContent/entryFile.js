const { StartFunc: StartFuncFromRead } = require("./Read/entryFile");
const { StartFunc: StartFuncFromInsert } = require("./Insert/entryFile");
const { StartFunc: StartFuncFromAlter } = require("./Alter/entryFile");

const StartFunc = () => {
    StartFuncFromRead();
    StartFuncFromInsert();
    StartFuncFromAlter();
};

module.exports = { StartFunc };