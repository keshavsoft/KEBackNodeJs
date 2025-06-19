import fs from "fs";
import { StartFunc as StartFuncCommonExpose } from "../../../CommonExpose/returnRootDir.js";

const CommonDataPath = "Data";

const StartFunc = ({ inKey, inValue, inFileName }) => {
  const LocalFileName = inFileName;
  const LocalDataPath = StartFuncCommonExpose();

  const filePath = `${LocalDataPath}/${CommonDataPath}/${LocalFileName}.json`;
  let LocalReturnObject = { KTF: false };

  try {
    if (!fs.existsSync(filePath)) {
      LocalReturnObject.KReason = `File ${LocalFileName}.json does not exist in ${CommonDataPath} folder.`;
      console.warn(LocalReturnObject.KReason);
      return LocalReturnObject;
    }

    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    const LocalFind = data.find(e => e[inKey] !== undefined);

    if (!LocalFind) {
      LocalReturnObject.KReason = `Key '${inKey}' not present to alter.`;
      return LocalReturnObject;
    }

    LocalFind[inKey] = inValue;

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

    LocalReturnObject.KTF = true;
    LocalReturnObject.JsonData=`Data altered successfully`
  } catch (err) {
    LocalReturnObject.KReason = `Error occurred: ${err.message}`;
    console.error("Error:", err);
  }

  return LocalReturnObject;
};

export { StartFunc };
