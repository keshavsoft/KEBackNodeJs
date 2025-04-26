import jwt from 'jsonwebtoken';

let StartFunc = ({ inObject }) => {
    var token = jwt.sign(inObject, 'KeshavSoftForAny');

    return token;
};

export { StartFunc };