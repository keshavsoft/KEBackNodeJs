const { StartFunc: StartFuncFromBasic } = require("./Basic/entryFile");
const { StartFunc: StartFuncFromFileAsArray } = require("./FileAsArray/entryFile");
const { StartFunc: StartFuncFromFileAsObject } = require("./FileAsObject/entryFile");

const StartFunc = () => {
    StartFuncFromBasic();
    StartFuncFromFileAsArray();
    StartFuncFromFileAsObject();
};

module.exports = { StartFunc };