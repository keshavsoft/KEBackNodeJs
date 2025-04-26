const { StartFunc: StartFuncFromRead } = require("./Read/entryFile");
const { StartFunc: StartFuncFromInsert } = require("./Insert/entryFile");

const StartFunc = () => {
    StartFuncFromRead();
    StartFuncFromInsert();
};

module.exports = { StartFunc };