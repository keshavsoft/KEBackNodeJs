import express from 'express';

var router = express.Router();

import { router as routerForDelete } from './Routes/entryFile.js';

router.use('/', routerForDelete);

export { router };