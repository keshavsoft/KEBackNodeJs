import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({ inKey, inValue, inFileName, inPk }) => {
    return postDefaultFuncFromDal({ inKey, inValue, inFileName, inPk });
};

export {
    postDefaultFunc
};