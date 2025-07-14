import fs from "fs";
import ParamsJson from '../../../CommonFuncs/params.json' with {type: 'json'};

const StartFunc = ({ inRequestBody }) => {
  const LocalFileName = ParamsJson.TableName;
  const LocalDataPath = ParamsJson.DataPath;

  const filePath = `${LocalDataPath}/${LocalFileName}.json`;
  let LocalReturnObject = { KTF: false };

  try {
    let data = {};

    if (fs.existsSync(filePath)) {
      data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }

    const existingPks = Object.keys(data).map(Number);
    const MaxPk = (existingPks.length > 0 ? Math.max(...existingPks) : 0) + 1;

    data[MaxPk] = inRequestBody;

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

    LocalReturnObject.KTF = true;
    LocalReturnObject.SuccessText = `Inserted pk ${MaxPk} into ${LocalFileName}.json successfully`;

    return LocalReturnObject;

  } catch (err) {
    console.error('Error:', err);
    LocalReturnObject.KReason = 'Error writing data';
    return LocalReturnObject;
  }
};

export { StartFunc };
