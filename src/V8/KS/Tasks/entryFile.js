const { StartFunc: StartFuncFromFileAsArray } = require("./FileAsArray/entryFile");
const { StartFunc: StartFuncFromFileAsObject } = require("./FileAsObject/entryFile");
const { StartFunc: StartFuncFromArrayAsContent } = require("./ArrayAsContent/entryFile");

const StartFunc = () => {
    StartFuncFromFileAsArray();
    StartFuncFromFileAsObject();
    StartFuncFromArrayAsContent();
};

module.exports = { StartFunc };