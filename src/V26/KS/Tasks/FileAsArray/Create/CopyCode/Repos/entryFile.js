import {
    GetFunc as GetFuncDal
} from '../Dals/entryFile.js';

let GetFunc = ({ inFileName }) => {
    return GetFuncDal({ inFileName });
};

export {
    GetFunc
};