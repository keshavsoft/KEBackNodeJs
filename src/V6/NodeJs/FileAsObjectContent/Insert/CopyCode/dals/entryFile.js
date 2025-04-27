import { StartFunc as StartFuncFromInsertToFile } from '../kLowDb/insertToFile.js';

let postDefaultFunc = ({ inKey, inValue, inFileName }) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({ inKey, inValue, inFileName });

    if (LocalFromLowDb.KTF === false) {
        return LocalFromLowDb;
    };

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};