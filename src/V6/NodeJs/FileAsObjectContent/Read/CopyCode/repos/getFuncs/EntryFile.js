import {
    GetFunc as GetFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = ({ inFileName }) => {
    return GetFuncDal({ inFileName });
};

export {
    GetFunc
};