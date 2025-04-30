// import { StartFunc as StartFuncPullData } from "../PullData/EntryFile.js";
import { StartFunc as StartFuncPullData } from "../../CommonPull/kLowDb/PullData/returnAsArray.js";

let StartFunc = ({ inId }) => {
  let LocalId = parseInt(inId);

  let LocalReturnData = { KTF: false };

  let LocalStartFuncPullData = StartFuncPullData();

  if ("error" in LocalStartFuncPullData) {
    LocalReturnData.KReason = LocalStartFuncPullData.error;
    return LocalReturnData;
  };

  let LocalFindData = LocalStartFuncPullData.find(el => el.pk === LocalId);

  if (LocalFindData === undefined) {
    LocalReturnData.KReason = `No Data by : ${LocalId}`;
    return LocalReturnData;
  };

  LocalReturnData.KTF = true;
  LocalReturnData.JsonData = LocalFindData;

  return LocalReturnData;
};

export { StartFunc };
