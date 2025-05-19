import fs from "fs";
const CommonDataPath = "{Data}";
const CommonFileName = "{TableName}";

const StartFunc = ({ inKey }) => {
  const LocalFileName = CommonFileName;

  let LocalReturnObject = { KTF: false };

  const filePath = `${CommonDataPath}/${LocalFileName}.json`;

  try {
    if (!fs.existsSync(filePath)) {
      // LocalReturnObject.KReason = `File ${LocalFileName}.json does not exist in the ${CommonDataPath} folder.`;
      LocalReturnObject.JsonData = `key : ${inKey} Row Deleted Successfully`;

      // console.warn(LocalReturnObject.KReason);
      return LocalReturnObject;
    }

    let data = JSON.parse(fs.readFileSync(filePath, "utf8"));

    const LocalFindIndex = data.findIndex(e => e.pk === parseInt(inKey));

    if (LocalFindIndex === -1) {
      LocalReturnObject.KReason = `Key "${inKey}" not found in the file.`;
      return LocalReturnObject;
    }

    data.splice(LocalFindIndex, 1);

    data = data.map(item =>
      Object.fromEntries(
        Object.entries(item).filter(([key, value]) => value !== null)
      )
    );

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

    LocalReturnObject.KTF = true;
    LocalReturnObject.JsonData = `${LocalFileName}.josn Data Deleted Successfully`
  } catch (err) {
    LocalReturnObject.KReason = `Error occurred: ${err.message}`;
    console.error("Error:", err);
  }

  return LocalReturnObject;
};

export { StartFunc };
