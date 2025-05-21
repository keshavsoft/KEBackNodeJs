import express from 'express';

const router = express.Router();

import { router as routerFromAsIs } from "./AsIs/routes.js";
import { router as routerFromSelColsAsArray } from "./SelColsAsArray/routes.js";
import { router as routerFromSelColumns } from "./SelColumns/routes.js";

router.use("/AsIs", routerFromAsIs);
router.use("/SelColsAsArray", routerFromSelColsAsArray);
router.use("/SelColumns", routerFromSelColumns);

export { router };