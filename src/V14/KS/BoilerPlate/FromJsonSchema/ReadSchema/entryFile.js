const { StartFunc: StartFuncFromSchema } = require("./fromSchema");
const { StartFunc: StartFuncFromTable } = require("./fromTable");

function StartFunc({ inRootPath }) {
    let LocalReturnObject = {};

    const LocalFromSchema = StartFuncFromSchema({ inRootPath });

    LocalReturnObject.TableName = LocalFromSchema.TableName;

    const LocalFromTable = StartFuncFromTable({
        inRootPath,
        inFileName: `${LocalReturnObject.TableName}.json`
    });

    LocalReturnObject.Columns = LocalFromTable.header[0];
    LocalReturnObject.Data = LocalFromTable.data;

    return LocalReturnObject;
};

module.exports = { StartFunc };
