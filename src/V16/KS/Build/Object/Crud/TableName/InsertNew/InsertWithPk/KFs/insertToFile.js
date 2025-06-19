import fs from "fs";
import ParamsJson from '../../../CommonFuncs/params.json' with { type: 'json' };

const StartFunc = ({ inRequestBody }) => {
  const LocalFileName = ParamsJson.TableName;
  const LocalDataPath = ParamsJson.DataPath;

  const filePath = `${LocalDataPath}/${LocalFileName}.json`;
  let LocalReturnObject = { KTF: false };

  try {
    if (fs.existsSync(filePath)) {
      const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

      const { Key, Value } = inRequestBody;

      if (!Key || !Value) {
        LocalReturnObject.KReason = "Missing 'Key' or 'Value' in request body.";
        return LocalReturnObject;
      }

      if (fileData.hasOwnProperty(Key)) {
        LocalReturnObject.KReason = `Key ${Key} already exists.`;
        return LocalReturnObject;
      }

      fileData[Key] = Value;

      fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2), 'utf8');

      LocalReturnObject.KTF = true;
      LocalReturnObject.SuccessText = `Inserted ${Key}: ${Value} into ${LocalFileName}.json`;
      return LocalReturnObject;
    } else {
      LocalReturnObject.KReason = `File ${LocalFileName}.json does not exist in ${LocalDataPath} folder.`;
      return LocalReturnObject;
    }
  } catch (err) {
    console.error('Error:', err);
    LocalReturnObject.KReason = err.message;
  }

  return LocalReturnObject;
};

export { StartFunc };
