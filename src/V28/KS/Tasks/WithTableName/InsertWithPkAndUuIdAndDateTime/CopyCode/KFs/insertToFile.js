import fs from "fs";
const CommonDataPath = "{Data}";
const CommonFileName = "{TableName}";

const StartFunc = ({ inRequestBody }) => {
  const LocalFileName = CommonFileName;
  let LocalinDataToInsert = inRequestBody;

  const filePath = `${CommonDataPath}/${LocalFileName}.json`;
  let LocalReturnObject = {};
  LocalReturnObject.KTF = false;

  try {
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      let LocalArrayPk = data.map(element => element.pk);

      let LocalRemoveUndefined = LocalArrayPk.filter(function (element) {
        return element !== undefined;
      });
      let numberArray = LocalRemoveUndefined.map(Number);

      let MaxPk = (Math.max(...numberArray, 0) + 1);
      let LocalInsertData = {
        ...LocalinDataToInsert,
        pk: MaxPk,
        UuId: uuidv4(),
        DateTime: new Date().toISOString()
      };

      data.push(LocalInsertData);

      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

      LocalReturnObject.KTF = true;
      LocalReturnObject.JsonData = `Data inserted Successfully with Pk:${MaxPk}, UuId and DateTime into ${LocalFileName}.json.`;
      return LocalReturnObject;
    } else {
      LocalReturnObject.KReason = `File ${LocalFileName}.json does not exist in ${CommonDataPath} folder.`
      console.warn(LocalReturnObject.KReason);

      return LocalReturnObject;
    }
  } catch (err) {
    console.error('Error:', err);
  }

  return LocalReturnObject;
};

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export { StartFunc };
