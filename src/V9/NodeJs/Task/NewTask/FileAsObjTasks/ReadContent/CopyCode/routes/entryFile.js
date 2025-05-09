import express from 'express';

var router = express.Router();

import {
    GetFunc
} from '../controllers/EntryFile.js';

router.get('/', GetFunc);

export { router };