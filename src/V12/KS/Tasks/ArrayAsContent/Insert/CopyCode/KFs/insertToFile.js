import fs from "fs";
import { StartFunc as StartFuncCommonExpose } from "../../../CommonExpose/returnRootDir.js";
const CommonDataPath = "Data";

const StartFunc = ({ inRequestBody, inFileName }) => {
  const LocalFileName = inFileName;
  let LocalinDataToInsert = inRequestBody;
  const LocalDataPath = StartFuncCommonExpose();

  const filePath = `${LocalDataPath}/${CommonDataPath}/${LocalFileName}.json`;
  let LocalReturnObject = {};
  LocalReturnObject.KTF = false;

  try {
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

      const alreadyExists = data.some(item => JSON.stringify(item) === JSON.stringify(LocalinDataToInsert));

      if (alreadyExists) {
        LocalReturnObject.KReason = "Duplicate entry: This exact data already exists.";
        return LocalReturnObject;
      }

      data.push(LocalinDataToInsert);

      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

      LocalReturnObject.KTF = true;
      LocalReturnObject.JsonData = `Inserted In To ${LocalFileName}.json successfully`;

      return LocalReturnObject;
    } else {
      LocalReturnObject.KReason = `File ${LocalFileName}.json does not exist.`;
      console.warn(LocalReturnObject.KReason);

      return LocalReturnObject;
    }
  } catch (err) {
    console.error('Error:', err);
  }

  return LocalReturnObject;
};

export { StartFunc };
