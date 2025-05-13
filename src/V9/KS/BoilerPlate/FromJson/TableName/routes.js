import express from 'express';

const router = express.Router();

import { router as routerFromInsertWithPk } from "./InsertWithPk/routes.js";
import { router as routerFromReadData } from "./ReadData/routes.js";
import { router as routerFromInsertWithColumns } from "./InsertWithColumns/routes.js";

router.use("/InsertWithPk", routerFromInsertWithPk);
router.use("/ReadData", routerFromReadData);
router.use("/InsertWithColumns", routerFromInsertWithColumns);

export { router };