const { StartFunc: StartFuncFromBasic } = require("./Basic/entryFile");

const StartFunc = () => {
    StartFuncFromBasic();
};

module.exports = { StartFunc };