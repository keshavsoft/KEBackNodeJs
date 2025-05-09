const { StartFunc: StartFuncFromBasic } = require("./Basic/entryFile");
const { StartFunc: StartFuncFromFileAsArray } = require("./FileAsArray/entryFile");
const { StartFunc: StartFuncFromFileAsObject } = require("./FileAsObject/entryFile");
const { StartFunc: StartFuncFromArrayAndContent } = require("./ArrayAndContent/entryFile");

const StartFunc = () => {
    StartFuncFromBasic();
    StartFuncFromFileAsArray();
    StartFuncFromFileAsObject();
    StartFuncFromArrayAndContent();
};

module.exports = { StartFunc };