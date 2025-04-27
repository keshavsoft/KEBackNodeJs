import fs from "fs";
import { StartFunc as StartFuncCommonExpose } from "../../../CommonExpose/returnRootDir.js";
const CommonDataPath = "Data";

const StartFunc = ({ inKey, inValue, inFileName }) => {
  const LocalFileName = inFileName;
  const LocalDataPath = StartFuncCommonExpose();

  const filePath = `${LocalDataPath}/${CommonDataPath}/${LocalFileName}.json`;
  let LocalReturnObject = {};
  LocalReturnObject.KTF = false;

  try {
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

      if (inKey in data) {
        LocalReturnObject.KReason = "Key already present";

        return LocalReturnObject;
      };

      data[inKey] = inValue;

      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

      LocalReturnObject.KTF = true;

      return LocalReturnObject;
    } else {
      console.warn(`File ${filePath} does not exist.`);
    }
  } catch (err) {
    console.error('Error:', err);
  }

  return LocalReturnObject;
};

export { StartFunc };
