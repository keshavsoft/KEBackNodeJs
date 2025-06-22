const { StartFunc: StartFuncFromFileAsArray } = require("./FileAsArray/entryFile");
const { StartFunc: StartFuncFromFileAsObject } = require("./FileAsObject/entryFile");
const { StartFunc: StartFuncFromArrayAsContent } = require("./ArrayAsContent/entryFile");
const { StartFunc: StartFuncFromWithTableName } = require("./WithTableName/entryFile");

const StartFunc = () => {
    StartFuncFromFileAsArray();
    StartFuncFromFileAsObject();
    StartFuncFromArrayAsContent();
    StartFuncFromWithTableName();
};

module.exports = { StartFunc };