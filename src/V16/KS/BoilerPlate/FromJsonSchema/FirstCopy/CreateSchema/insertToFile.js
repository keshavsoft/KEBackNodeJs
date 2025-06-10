const { getJsonFiles } = require("./pullJsonFiles");

const fse = require("fs-extra");

const StartFunc = ({ inToPath }) => {
    const LocalToPath = inToPath;
    
    const LocalJsonFilesArray = getJsonFiles({ inToPath });
    
   const LocalTableName = LocalJsonFilesArray.length > 0
        ? LocalJsonFilesArray[0].replace('.json', '')
       : "SampleTable";
    
  fse.writeFileSync(
    `${LocalToPath}/schema.json`,
    JSON.stringify({
      TableName: LocalTableName,
      Columns: [
        {
          ColumnName: "Col1",
          unique: true,
          type: "STRING",
        },
        {
          ColumnName: "Col2",
          unique: false,
          type: "NUMBER",
        },
      ],
    })
  );
};

module.exports = { StartFunc };
