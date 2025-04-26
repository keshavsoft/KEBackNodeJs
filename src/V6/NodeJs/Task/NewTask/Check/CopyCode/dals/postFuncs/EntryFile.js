import { StartFunc as StartFuncFromSelectedColumns } from '../../kLowDb/readFromFile.js';

let postDefaultFunc = ({ inUserName, inPassword }) => {
    let LocalFromLowDb = StartFuncFromSelectedColumns({ inUserName, inPassword });

    if (LocalFromLowDb.KTF === false) {
        return false;
    };

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};