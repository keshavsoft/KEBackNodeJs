import { StartFunc as StartFuncFromdeleteFile } from '../KFs/deleteFile.js';

let DeleteFunc = ({ inFileName }) => {
    let LocalFromLowDb = StartFuncFromdeleteFile({ inFileName });

    return LocalFromLowDb;
};

export {
    DeleteFunc
};