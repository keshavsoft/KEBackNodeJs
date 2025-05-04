const { StartFunc: StartFuncFromFileAsArray } = require("./FileAsArray/entryFile");

const StartFunc = () => {
    StartFuncFromFileAsArray();
};

module.exports = { StartFunc };