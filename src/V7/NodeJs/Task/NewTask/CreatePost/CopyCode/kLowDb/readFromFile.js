import { StartFunc as StartFuncReturnDbObject } from "../../CommonPull/kLowDb/CommonFuncs/ReturnDbObject.js";
import { StartFunc as LocalFuncGeneratePk } from "./Generate.js";

let StartFunc = ({ inRequestBody }) => {
  let LocalinDataToInsert = inRequestBody;
  let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

  const db = StartFuncReturnDbObject()?.dbObject;
  db.read();

  let LocalDataWithUuid = LocalFuncGeneratePk({
    inDataToInsert: LocalinDataToInsert,
    inData: db.data
  });

  if (LocalDataWithUuid.KTF === false) {
    LocalReturnData.KReason = LocalDataWithUuid.KReason;
    return LocalReturnData;
  };

  db.data.push(LocalDataWithUuid.InsertData);
  db.write();

  LocalReturnData.KTF = true;
  LocalReturnData.pk = LocalDataWithUuid.InsertData.pk;

  return LocalReturnData;
};

export { StartFunc };
