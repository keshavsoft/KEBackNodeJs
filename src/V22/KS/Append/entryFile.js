const { StartFunc: StartFuncFromWithSubTable } = require("./WithSubTable/entryFile");

const StartFunc = () => {
    StartFuncFromWithSubTable();
};

module.exports = { StartFunc };