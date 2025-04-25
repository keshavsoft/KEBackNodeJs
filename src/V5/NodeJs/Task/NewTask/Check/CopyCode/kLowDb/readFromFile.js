import { StartFunc as StartFuncreturnAsArray } from "../../CommonPull/kLowDb/PullData/returnAsArray.js";

let StartFunc = ({ inUserName, inPassword }) => {
  let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

  const LocalData = StartFuncreturnAsArray();
  let LocalFind = LocalData.find(User => User.UserName === inUserName && User.Password === inPassword);

  if (!LocalFind) {
    return LocalReturnData;
  };

  LocalReturnData.KTF = true;
  LocalReturnData.DataPk = LocalFind?.DataPk;

  return LocalReturnData;
};

export { StartFunc };
