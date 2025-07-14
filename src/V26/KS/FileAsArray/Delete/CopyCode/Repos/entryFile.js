import {
    DeleteFunc as DeleteFuncFromDal
} from '../Dals/entryFile.js';

let DeleteFunc = ({ inFileName }) => {
    return DeleteFuncFromDal({ inFileName });
};

export {
    DeleteFunc
};