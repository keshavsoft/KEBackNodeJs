import { StartFunc as StartFuncWriteTofile } from '../../kLowDb/WriteTofile/WithChecking/StartFunc.js';
import { StartFunc as SaveImage } from '../../kLowDb/SaveImage/entryFile.js';

let PostImageAsBase64Func = ({ inPostBody }) => {
    let LocalFromSave = StartFuncWriteTofile({ inDataToInsert: inPostBody });

    if (LocalFromSave.KTF === false) {
        return LocalFromSave;
    };

    const LocalFromSaveImage = SaveImage({ inImageData: inPostBody.image, inRowPk: LocalFromSave.pk });

    if (LocalFromSaveImage === false) {
        LocalFromSave.ImageSaved = false;

        return LocalFromSave;
    };

    return LocalFromSave;
};

export {
    PostImageAsBase64Func
};
