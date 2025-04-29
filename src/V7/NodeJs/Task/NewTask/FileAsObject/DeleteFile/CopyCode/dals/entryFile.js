import { StartFunc as StartFuncFromdeleteFile } from '../kLowDb/deleteFile.js';

let DeleteFunc = ({ inFileName }) => {
    let LocalFromLowDb = StartFuncFromdeleteFile({ inFileName });

    return LocalFromLowDb;
};

export {
    DeleteFunc
};