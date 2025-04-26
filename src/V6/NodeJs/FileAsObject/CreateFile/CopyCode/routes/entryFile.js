import express from 'express';

var router = express.Router();

import {
    GetFunc
} from '../controllers/entryFile.js';

router.get('/:FileName', GetFunc);

export { router };