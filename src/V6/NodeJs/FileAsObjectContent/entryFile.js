const { StartFunc: StartFuncFromRead } = require("./Read/entryFile");
const { StartFunc: StartFuncFromInsert } = require("./Insert/entryFile");
const { StartFunc: StartFuncFromDelete } = require("./Delete/entryFile");

const StartFunc = () => {
    StartFuncFromRead();
    StartFuncFromInsert();
    StartFuncFromDelete();
};

module.exports = { StartFunc };