import fs from "fs";
import ParamsJson from '../../../CommonFuncs/params.json' with { type: 'json' };

const StartFunc = ({ inKey }) => {
  const LocalFileName = ParamsJson.TableName;
  const LocalDataPath = ParamsJson.DataPath;
  const filePath = `${LocalDataPath}/${LocalFileName}.json`;

  let LocalReturnObject = { KTF: false };

  try {
    if (!fs.existsSync(filePath)) {
      LocalReturnObject.KReason = `File ${LocalFileName}.json not found in ${LocalDataPath}`;
      return LocalReturnObject;
    }

    let data = JSON.parse(fs.readFileSync(filePath, "utf8"));

    if (!data.hasOwnProperty(inKey)) {
      LocalReturnObject.KReason = `Key '${inKey}' not found in data.`;
      return LocalReturnObject;
    }

    delete data[inKey];

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

    LocalReturnObject.KTF = true;
    LocalReturnObject.JsonData = `Deleted successfully with key: '${inKey}'`;
  } catch (err) {
    LocalReturnObject.KReason = `Error: ${err.message}`;
    console.error("Error:", err);
  }

  return LocalReturnObject;
};

export { StartFunc };
