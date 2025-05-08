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
      let LocalArrayPk = data.map(element => element.pk);

      let LocalRemoveUndefined = LocalArrayPk.filter(function (element) {
        return element !== undefined;
      });

      let numberArray = LocalRemoveUndefined.map(Number);
      let MaxPk = Math.max(...numberArray, 0) + 1;

      let LocalInsertData = { ...LocalinDataToInsert, pk: MaxPk };
      data.push(LocalInsertData);

      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

      LocalReturnObject.KTF = true;
      LocalReturnObject.JsonData = `Inserted pk ${MaxPk} In To ${LocalFileName}.json successfully`;

      return LocalReturnObject;
    } else {
      LocalReturnObject.KReason = `File ${LocalFileName}.json does not exist in ${CommonDataPath} folder.`;
      console.warn(LocalReturnObject.KReason);

      return LocalReturnObject;
    };
  } catch (err) {
    console.error('Error:', err);
  };

  return LocalReturnObject;
};

export { StartFunc };
