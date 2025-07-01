import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnUserName,LocalCoumnPassword}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnUserName,LocalCoumnPassword});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};