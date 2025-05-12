const { StartFunc: StartFuncFromInsertWithPk } = require("./InsertWithPk/entryFile");

const StartFunc = () => {
    StartFuncFromInsertWithPk();
};

module.exports = { StartFunc };