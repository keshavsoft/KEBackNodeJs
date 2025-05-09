import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({ inRequestBody, inFileName }) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({ inRequestBody, inFileName });

    if (LocalFromLowDb.KTF === false) {
        return LocalFromLowDb;
    };

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};