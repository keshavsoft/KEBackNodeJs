import { StartFunc as StartFuncFromSelectedColumns } from '../kLowDb/readFromFile.js';

let postDefaultFunc = ({  inKey, inValu }) => {
    let LocalFromLowDb = StartFuncFromSelectedColumns({  inKey, inValu });

    if (LocalFromLowDb.KTF === false) {
        return false;
    };

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};