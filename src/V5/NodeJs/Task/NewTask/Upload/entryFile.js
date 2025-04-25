const { StartFunc: StartFuncFromAsIs } = require("./ImageAndMail/entryFile");
const { StartFunc: StartFuncFromImageAsBase64 } = require("./ImageAsBase64/entryFile");

const StartFunc = () => {
    StartFuncFromAsIs();
    StartFuncFromImageAsBase64();
};

module.exports = { StartFunc };
