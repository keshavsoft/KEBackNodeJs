const { StartFunc: StartFuncFromInsert } = require("./Insert/entryFile");
const { StartFunc: StartFuncFromDelete } = require("./Delete/entryFile");
const { StartFunc: StartFuncFromRead } = require("./Read/entryFile");
const { StartFunc: StartFuncFromInsertWithPk } = require("./InsertWithPk/entryFile");
const { StartFunc: StartFuncFromAlterWithPk } = require("./AlterWithPk/entryFile");
const { StartFunc: StartFuncFromAlter } = require("./Alter/entryFile");
const { StartFunc: StartFuncFromInsertWithPkAndUuIdAndDateTime } = require("./InsertWithPkAndUuIdAndDateTime/entryFile");
const { StartFunc: StartFuncFromAlterRow } = require("./AlterRow/entryFile");

const StartFunc = () => {
    StartFuncFromInsert();
    StartFuncFromDelete();
    StartFuncFromRead();
    StartFuncFromInsertWithPk();
    StartFuncFromAlterWithPk();
    StartFuncFromAlter();
    StartFuncFromInsertWithPkAndUuIdAndDateTime();
    StartFuncFromAlter();
    StartFuncFromAlterRow();
};

module.exports = { StartFunc };