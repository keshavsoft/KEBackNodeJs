import express from 'express';

const router = express.Router();

import { router as routerFromData } from "./Data/routes.js";
import { router as routerFromSelColsAsArray } from "./SelColsAsArray/routes.js";
import { router as routerFromSelColumns } from "./SelColumns/routes.js";

router.use("/Data", routerFromData);
router.use("/SelColsAsArray", routerFromSelColsAsArray);
router.use("/SelColumns", routerFromSelColumns);

export { router };