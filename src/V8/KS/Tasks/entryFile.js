const { StartFunc: StartFuncFromFileAsArray } = require("./FileAsArray/entryFile");
const { StartFunc: StartFuncFromFileAsObject } = require("./FileAsObject/entryFile");

const StartFunc = () => {
    StartFuncFromFileAsArray();
    StartFuncFromFileAsObject();
};

module.exports = { StartFunc };