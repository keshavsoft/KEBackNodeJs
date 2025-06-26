const { StartFunc: StartFuncFromSchema } = require("./fromSchema");

function StartFunc({ inRootPath }) {
    let LocalReturnObject = {};

    const LocalFromSchema = StartFuncFromSchema({ inRootPath });

    LocalReturnObject.TableName = LocalFromSchema.TableName;

    return LocalReturnObject;
};

module.exports = { StartFunc };
