const { StartFunc: StartFuncFromInsertWithPk } = require("./InsertWithPk/entryFile");
const { StartFunc: StartFuncFromShowAll } = require("./ShowAll/entryFile");
const { StartFunc: StartFuncFromDelete } = require("./Delete/entryFile");
const { StartFunc: StartFuncFromRowDataWithPk } = require("./RowDataWithPk/entryFile");
const { StartFunc: StartFuncFromAlter } = require("./Alter/entryFile");
const { StartFunc: StartFuncFromInsertWithPkAndUuIdAndDateTime } = require("./InsertWithPkAndUuIdAndDateTime/entryFile");

const StartFunc = () => {
    StartFuncFromInsertWithPk();
    StartFuncFromShowAll();
    StartFuncFromDelete();
    StartFuncFromRowDataWithPk();
    StartFuncFromAlter();
    StartFuncFromInsertWithPkAndUuIdAndDateTime();
};

module.exports = { StartFunc };