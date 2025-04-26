import { StartFunc as StartFuncFromSelectedColumns } from '../kLowDb/readFromFile.js';

let postDefaultFunc = ({ inKey, inValu, inFileName }) => {
    let LocalFromLowDb = StartFuncFromSelectedColumns({ inKey, inValu, inFileName });

    if (LocalFromLowDb.KTF === false) {
        return false;
    };

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};