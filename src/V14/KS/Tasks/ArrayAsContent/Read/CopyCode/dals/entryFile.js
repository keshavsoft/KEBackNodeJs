import { StartFunc as StartFuncFromReadFromFile } from '../KFs/readFromFile.js';

let GetFunc = ({ inFileName }) => {
    let LocalFromLowDb = StartFuncFromReadFromFile({ inFileName });

    return LocalFromLowDb;
};

export {
    GetFunc
};