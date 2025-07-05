import {
    PostFunc as PostFuncDal
} from '../Dals/entryFile.js';

let PostFunc = ({ inFileName, inInsertData }) => {
    return PostFuncDal({ inFileName, inInsertData });
};

export {
    PostFunc
};