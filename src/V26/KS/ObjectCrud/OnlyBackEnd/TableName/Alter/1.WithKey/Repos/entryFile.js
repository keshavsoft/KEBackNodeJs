import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({ inValue, inPk }) => {
    return postDefaultFuncFromDal({ inValue, inPk });
};

export {
    postDefaultFunc
};