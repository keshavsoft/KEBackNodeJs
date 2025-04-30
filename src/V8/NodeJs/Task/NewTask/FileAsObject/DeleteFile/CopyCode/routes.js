import express from 'express';

var router = express.Router();

import { router as routerForDelete } from './routes/entryFile.js';

router.use('/', routerForDelete);

export { router };