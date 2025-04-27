import { StartFunc as StartFuncFromDeleteFromFile } from '../kLowDb/deleteFromFile.js';

let postDefaultFunc = ({ inKey, inFileName }) => {
    let LocalFromLowDb = StartFuncFromDeleteFromFile({ inKey, inFileName });

    if (LocalFromLowDb.KTF === false) {
        return LocalFromLowDb;
    };

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};