import express from 'express';

const router = express.Router();

import { router as routerFromAsIs } from "./AsIs/routes.js";
import { router as routerFromSelColsAsArray } from "./SelColsAsArray/routes.js";
import { router as routerFromSelColumns } from "./SelColumns/routes.js";
import { router as routerFromGroupSingleColLength } from "./GroupSingleColLength/routes.js";
import { router as routerFromSingleColumn } from "./SingleColumn/routes.js";
import { router as routerFromRowDataWithPk } from "./RowDataWithPk/routes.js";
import { router as routerFromGroupSingleColumn } from "./GroupSingleColumn/routes.js";

router.use("/AsIs", routerFromAsIs);
router.use("/SelColsAsArray", routerFromSelColsAsArray);
router.use("/SelColumns", routerFromSelColumns);
router.use("/GroupSingleColLength", routerFromGroupSingleColLength);
router.use("/SingleColumn", routerFromSingleColumn);
router.use("/RowDataWithPk", routerFromRowDataWithPk);
router.use("/GroupSingleColumn", routerFromGroupSingleColumn);

export { router };