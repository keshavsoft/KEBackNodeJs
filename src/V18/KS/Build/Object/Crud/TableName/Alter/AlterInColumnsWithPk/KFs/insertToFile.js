import fs from "fs";
import ParamsJson from '../../../CommonFuncs/params.json' with { type: 'json' };

const StartFunc = ({ inBody }) => {
  const LocalFileName = ParamsJson.TableName;
  const LocalDataPath = ParamsJson.DataPath;
  const filePath = `${LocalDataPath}/${LocalFileName}.json`;

  let LocalReturnObject = { KTF: false };

  try {
    if (!fs.existsSync(filePath)) {
      LocalReturnObject.KReason = `File ${LocalFileName}.json does not exist in ${LocalDataPath} folder.`;
      return LocalReturnObject;
    }

    const { Key, Value } = inBody;

    if (!Key || !Value) {
      LocalReturnObject.KReason = "Missing 'Key' or 'Value' in request body.";
      return LocalReturnObject;
    }

    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

    if (!data.hasOwnProperty(Key)) {
      LocalReturnObject.KReason = `Key '${Key}' not found in data.`;
      return LocalReturnObject;
    }

    data[Key] = Value;

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

    LocalReturnObject.KTF = true;
    LocalReturnObject.JsonData = `Record updated successfully for key: '${Key}'`;
  } catch (err) {
    LocalReturnObject.KReason = `Error: ${err.message}`;
    console.error("Error:", err);
  }

  return LocalReturnObject;
};

export { StartFunc };
