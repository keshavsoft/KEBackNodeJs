import { StartFunc as ReadFromFile } from '../kLowDb/createFile.js';

let GetFunc = ({ inFileName }) => {
    let LocalFromLowDb = ReadFromFile({ inFileName });

    return LocalFromLowDb;
};

export {
    GetFunc
};