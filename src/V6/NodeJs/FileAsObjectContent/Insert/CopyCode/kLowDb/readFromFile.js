import fs from "fs";
import { StartFunc as StartFuncCommonExpose } from "../../../CommonExpose/returnRootDir.js";
const CommonDataPath = "Data";

const StartFunc = ({ inKey, inValu, inFileName }) => {
  const LocalFileName = inFileName;
  const LocalDataPath = StartFuncCommonExpose();

  const filePath = `${LocalDataPath}/${CommonDataPath}/${LocalFileName}.json`;

  try {
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      data[inKey] = inValu;
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      return { KTF: true };
    } else {
      console.warn(`File ${filePath} does not exist.`);
    }
  } catch (err) {
    console.error('Error:', err);
  }

  return { KTF: false };
};

export { StartFunc };
