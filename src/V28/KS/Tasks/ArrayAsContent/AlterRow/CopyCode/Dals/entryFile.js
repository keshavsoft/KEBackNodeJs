import { StartFunc as StartFuncFromInsertToFile } from '../KFs/alterFile.js';

let postDefaultFunc = ({ inPostBody, inFileName, inPk }) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({ inPostBody, inFileName, inPk });

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};