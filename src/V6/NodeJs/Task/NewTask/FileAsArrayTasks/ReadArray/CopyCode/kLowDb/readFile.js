import fs from "fs";
const CommonFilePath = `Data/chats.json`;

let StartFunc = () => {
    let LocalReturnData = { KTF: false };

    try {
        const data = fs.readFileSync(CommonFilePath, 'utf8');

        LocalReturnData.KTF = true;
        LocalReturnData.JsonData = data;

    } catch (err) {
        if (err.code === 'EEXIST') {
            console.log('File already exists.');
        } else {
            console.error('Error creating file:', err);
        }
    };

    // fs.writeFileSync(`${LocalDataPath}/${LocalFileName}`, JSON.stringify({}));

    return LocalReturnData;
};

export { StartFunc };
