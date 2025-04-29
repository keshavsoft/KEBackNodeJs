import { StartFunc as ReadFromFile } from '../kLowDb/readFile.js';

let GetFunc = () => {
    let LocalFromLowDb = ReadFromFile();

    return LocalFromLowDb;
};

export {
    GetFunc
};