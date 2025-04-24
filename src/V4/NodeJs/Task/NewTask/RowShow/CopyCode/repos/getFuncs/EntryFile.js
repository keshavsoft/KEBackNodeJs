import {
    GetRowDataFunc as GetRowDataFuncDal,
} from '../../dals/getFuncs/EntryFile.js';

let GetRowDataFunc = async ({ inId }) => {
    return GetRowDataFuncDal({ inId });
};

export {
    GetRowDataFunc,
};