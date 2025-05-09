import { StartFunc as ReadFromFile } from '../KFs/createFile.js';

let GetFunc = ({ inFileName }) => {
    let LocalFromLowDb = ReadFromFile({ inFileName });

    return LocalFromLowDb;
};

export {
    GetFunc
};