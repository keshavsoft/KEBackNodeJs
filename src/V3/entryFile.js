const { StartFunc: StartFuncNodeJs } = require("./NodeJs/entryFile");

const StartFunc = () => {
    StartFuncNodeJs();
};

module.exports = { StartFunc };