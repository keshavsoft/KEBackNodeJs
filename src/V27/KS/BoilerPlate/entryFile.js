const { StartFunc: StartFuncFromBasic } = require("./Basic/entryFile");
const { StartFunc: StartFuncFromFileAsArray } = require("./FileAsArray/entryFile");
const { StartFunc: StartFuncFromFileAsObject } = require("./FileAsObject/entryFile");
const { StartFunc: StartFuncFromArrayAndContent } = require("./ArrayAndContent/entryFile");
const { StartFunc: StartFuncFromJson } = require("./FromJson/entryFile");
const { StartFunc: StartFuncFromJsonConstraints } = require("./FromJsonConstraints/entryFile");
const { StartFunc: StartFuncFromJsonConSubRoute } = require("./FromJsonConSubRoute/entryFile");
const { StartFunc: StartFuncFromJsonSchema } = require("./FromJsonSchema/entryFile");
const { StartFunc: StartFuncFromWithSubTable } = require("./WithSubTable/entryFile");

const StartFunc = () => {
    StartFuncFromBasic();
    StartFuncFromFileAsArray();
    StartFuncFromFileAsObject();
    StartFuncFromArrayAndContent();
    StartFuncFromJson();
    StartFuncFromJsonConstraints();
    StartFuncFromJsonConSubRoute();
    StartFuncFromJsonSchema();
    StartFuncFromWithSubTable();
};

module.exports = { StartFunc };