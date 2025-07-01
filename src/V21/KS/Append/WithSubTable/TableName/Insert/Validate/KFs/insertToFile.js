import fs from "fs";

import ParamsJson from '../../../CommonFuncs/params.json' with {type: 'json'};

const StartFunc = ({ LocalCoumnUserName, LocalCoumnPassword }) => {
  const LocalFileName = "Users";
  const LocalDataPath = ParamsJson.DataPath;


  const filePath = `${LocalDataPath}/${LocalFileName}.json`;
  let LocalReturnObject = {};
  LocalReturnObject.KTF = false;

  try {
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      let LocalData = data.find(element => element.UserName === LocalCoumnUserName && element.Password === LocalCoumnPassword);

      if (!LocalData) {
        LocalReturnObject.KReason = `Wrong Credentials.`;
        return LocalReturnObject;
      };
      LocalReturnObject.KTF = true;

      return LocalReturnObject;
    } else {
      LocalReturnObject.KReason = `File ${LocalFileName}.json does not exist in ${LocalDataPath} folder.`;
      console.warn(LocalReturnObject.KReason);

      return LocalReturnObject;
    };
  } catch (err) {
    console.error('Error:', err);
  };

  return LocalReturnObject;
};

export { StartFunc };