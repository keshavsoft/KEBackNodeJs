import express from 'express';

const router = express.Router();

import { router as routerFromInsertWithPk } from "./InsertWithPk/routes.js";
import { router as routerFromReadData } from "./ReadData/routes.js";

router.use("/InsertWithPk", routerFromInsertWithPk);
router.use("/ReadData", routerFromReadData);

export { router };