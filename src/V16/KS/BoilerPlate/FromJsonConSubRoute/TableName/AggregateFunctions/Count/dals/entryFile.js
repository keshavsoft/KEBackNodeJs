import { StartFunc as StartFuncFromReadFromFile } from '../KFs/readFromFile.js';

let GetFunc = () => {
    let LocalFromLowDb = StartFuncFromReadFromFile();
    
    return {
        KTF: LocalFromLowDb.KTF,
        JsonData: { count: LocalFromLowDb.JsonData.length }
    };
};

export {
    GetFunc
};
