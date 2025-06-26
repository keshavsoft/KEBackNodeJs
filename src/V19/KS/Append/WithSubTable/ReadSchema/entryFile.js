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

        LocalReturnObject.Columns = LocalFromTable.header[0] || [];
        LocalReturnObject.Data = LocalFromTable.data || [];
    } else {
        const LocalFromSchemaJson = LocalFuncFromSchemaJson({ inSchemaJson: LocalFromSchema.Columns });

        LocalReturnObject.Columns = LocalFromSchemaJson.Columns;
        LocalReturnObject.ColumnsWithSchema = LocalFromSchemaJson.ColumnsWithSchema;
        LocalReturnObject.Data = [];
        LocalReturnObject.Tables = LocalFromSchema.Tables || [];
    }

    return LocalReturnObject;
};

const LocalFuncFromSchemaJson = ({ inSchemaJson }) => {
    let LocalFromSchema = inSchemaJson;

    let LocalReturnObject = {};

    LocalReturnObject.Columns = inSchemaJson.map(element => {
        return element.ColumnName;
    });

    LocalReturnObject.ColumnsWithSchema = LocalFromSchema.Columns;
    LocalReturnObject.Data = [];

    return LocalReturnObject;
};

module.exports = { StartFunc };
