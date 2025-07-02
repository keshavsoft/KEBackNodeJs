import {
    GetFunc as GetFuncDal
} from '../dals/entryFile.js';

let GetFunc = ({ inFileName }) => {
    return GetFuncDal({ inFileName });
};

export {
    GetFunc
};