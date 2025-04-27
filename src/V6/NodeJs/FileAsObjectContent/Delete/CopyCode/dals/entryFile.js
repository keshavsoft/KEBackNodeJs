import { StartFunc as StartFuncFromSelectedColumns } from '../kLowDb/readFromFile.js';

let postDefaultFunc = ({ inKey, inFileName }) => {
    let LocalFromLowDb = StartFuncFromSelectedColumns({ inKey, inFileName });

    if (LocalFromLowDb.KTF === false) {
        return LocalFromLowDb;
    };

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};