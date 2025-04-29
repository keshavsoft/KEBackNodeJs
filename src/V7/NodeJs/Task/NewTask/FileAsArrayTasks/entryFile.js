const { StartFunc: StartFuncFromReadArray } = require("./ReadArray/entryFile");

const StartFunc = () => {
    StartFuncFromReadArray();
};

module.exports = { StartFunc };