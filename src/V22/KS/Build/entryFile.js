const { StartFunc: StartFuncFromObject } = require("./Object/entryFile");

const StartFunc = () => {
    StartFuncFromObject();
};

module.exports = { StartFunc };