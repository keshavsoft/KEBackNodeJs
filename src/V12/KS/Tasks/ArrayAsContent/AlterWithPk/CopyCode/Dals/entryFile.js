import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({ inKey, inValue, inFileName, inPk }) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({ inKey, inValue, inFileName, inPk });

    if (LocalFromLowDb.KTF === false) {
        return LocalFromLowDb;
    };

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};