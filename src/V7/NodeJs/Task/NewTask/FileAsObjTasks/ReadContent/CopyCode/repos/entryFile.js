import {
    GetFunc as GetFuncDal
} from '../dals/EntryFile.js';

let GetFunc = () => {
    return GetFuncDal();
};

export {
    GetFunc
};