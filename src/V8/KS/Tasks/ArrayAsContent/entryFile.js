const { StartFunc: StartFuncFromInsert } = require("./Insert/entryFile");

const StartFunc = () => {
    StartFuncFromInsert();
};

module.exports = { StartFunc };