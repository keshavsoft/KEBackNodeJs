import express from 'express';

const router = express.Router();

import { router as routerFromInsertAsIs } from "./InsertAsIs/routes.js";
import { router as routerFromInsertWithUuIdAndDateTime } from "./InsertWithUuIdAndDateTime/routes.js";

router.use("/InsertAsIs", routerFromInsertAsIs);
router.use("/InsertWithUuIdAndDateTime", routerFromInsertWithUuIdAndDateTime);

export { router };