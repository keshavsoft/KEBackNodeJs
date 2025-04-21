import express from 'express';

var router = express.Router();

import { PostCheckFunc as middlewaresCheck } from './middlewares/Check/EntryFile.js';
import { router as routerpostFuncs } from './routes/postFuncs/EntryFile.js';

router.use('/', middlewaresCheck, routerpostFuncs);

export { router };