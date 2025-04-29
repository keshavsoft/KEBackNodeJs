import {
    DeleteFunc as DeleteFuncFromDal
} from '../dals/entryFile.js';

let DeleteFunc = ({ inFileName }) => {
    return DeleteFuncFromDal({ inFileName });
};

export {
    DeleteFunc
};