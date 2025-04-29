import express from 'express';

var router = express.Router();

import {
    PostImageAsBase64Func
} from '../../controllers/postFuncs/EntryFile.js';

router.post('/ImageAsBase64', PostImageAsBase64Func);

export { router };
