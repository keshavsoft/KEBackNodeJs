import express from 'express';

const router = express.Router();

import { router as routerFromGroupSingleColLength } from "./GroupSingleColLength/routes.js";
import { router as routerFromGroupSingleColumn } from "./GroupSingleColumn/routes.js";

router.use("/GroupSingleColLength", routerFromGroupSingleColLength);
router.use("/GroupSingleColumn", routerFromGroupSingleColumn);

export { router };