import express from 'express';

var router = express.Router();

import { router as routerpostFuncs } from './routes/entryFile.js';

router.use('/', routerpostFuncs);

export { router };