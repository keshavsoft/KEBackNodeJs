const { StartFunc: StartFuncFromInsertWithPk } = require("./InsertWithPk/entryFile");
const { StartFunc: StartFuncFromShowAll } = require("./ShowAll/entryFile");

const StartFunc = () => {
    StartFuncFromInsertWithPk();
    StartFuncFromShowAll();
};

module.exports = { StartFunc };