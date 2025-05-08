import { StartFunc as StartFuncFromDeleteFromFile } from '../KFs/deleteFromFile.js';

let postDefaultFunc = ({ inKey, inValue, inFileName }) => {
    let LocalFromLowDb = StartFuncFromDeleteFromFile({ inKey, inValue, inFileName });

    if (LocalFromLowDb.KTF === false) {
        return LocalFromLowDb;
    };

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};