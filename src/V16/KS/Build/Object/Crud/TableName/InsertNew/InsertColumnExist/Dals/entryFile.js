import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnCol1,LocalCoumnCol2}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnCol1,LocalCoumnCol2});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};