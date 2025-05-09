import express from 'express';

var router = express.Router();

import { router as routerpostFuncs } from './Routes/PostFuncs/EntryFile.js';

router.use('/', routerpostFuncs);

export { router };