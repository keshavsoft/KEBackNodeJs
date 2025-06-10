const { StartFunc: StartFuncFromSchema } = require("./fromSchema");
const { StartFunc: StartFuncFromTable } = require("./fromTable");
const fs = require("fs");
const path = require("path");

function StartFunc({ inRootPath }) {
    let LocalReturnObject = {};

    const LocalFromSchema = StartFuncFromSchema({ inRootPath });

    LocalReturnObject.TableName = LocalFromSchema.TableName;

    const filePath = path.join(inRootPath, `${LocalReturnObject.TableName}.json`);

     //  Check if the JSON file with the table name exists If it exists, read the header and data from the file
    // Otherwise, return empty arrays for Columns and Data
    if (fs.existsSync(filePath)) {
        const LocalFromTable = StartFuncFromTable({
            inRootPath,
            inFileName: `${LocalReturnObject.TableName}.json`
        });

        LocalReturnObject.Columns = LocalFromTable.header?.[0] || [];
        LocalReturnObject.Data = LocalFromTable.data || [];
    } else {
        LocalReturnObject.Columns = [];
        LocalReturnObject.Data = [];
    }

    return LocalReturnObject;
};

module.exports = { StartFunc };
