import express from 'express';

var  router = express.Router();

import {
    GetFunc
} from '../Controllers/entryFile.js';

router.get('/:FileName', GetFunc);

export { router };