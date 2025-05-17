const { StartFunc: StartFuncFromInsertWithPk } = require("./InsertWithPk/entryFile");
const { StartFunc: StartFuncFromShowAll } = require("./ShowAll/entryFile");
const { StartFunc: StartFuncFromDelete } = require("./Delete/entryFile");
const { StartFunc: StartFuncFromRowDataWithPk } = require("./RowDataWithPk/entryFile");

const StartFunc = () => {
    StartFuncFromInsertWithPk();
    StartFuncFromShowAll();
    StartFuncFromDelete();
    StartFuncFromRowDataWithPk();
};

module.exports = { StartFunc };