const { StartFunc: StartFuncFromInsert } = require("./Insert/entryFile");
const { StartFunc: StartFuncFromDelete } = require("./Delete/entryFile");
const { StartFunc: StartFuncFromRead } = require("./Read/entryFile");
const { StartFunc: StartFuncFromInsertWithPk } = require("./InsertWithPk/entryFile");

const StartFunc = () => {
    StartFuncFromInsert();
    StartFuncFromDelete();
    StartFuncFromRead();
    StartFuncFromInsertWithPk();
};

module.exports = { StartFunc };