import fs from "fs";
import { StartFunc as StartFuncCommonExpose } from "../../../CommonExpose/returnRootDir.js";

const CommonDataPath = "Data";

const StartFunc = ({ inKey, inValue, inFileName, inPk }) => {
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

    const recordToUpdate = data.find(e => e.pk === Number(inPk));

    if (!recordToUpdate) {
      LocalReturnObject.KReason = `Record with Primary Key '${inPk}' not found.`;
      return LocalReturnObject;
    }

    const actualKey = Object.keys(recordToUpdate).find(key => recordToUpdate[key] === inKey);

    if (!actualKey) {
      LocalReturnObject.KReason = `No matching value '${inKey}' found in any key of record with pk '${inPk}'.`;
      return LocalReturnObject;
    }

    recordToUpdate[actualKey] = inValue;

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

    LocalReturnObject.KTF = true;
    LocalReturnObject.JsonData = `Updated '${actualKey}' from '${inKey}' to '${inValue}' for pk '${inPk}'.`;
  } catch (err) {
    LocalReturnObject.KReason = `Error occurred: ${err.message}`;
    console.error("Error:", err);
  }

  return LocalReturnObject;
};

export { StartFunc };
