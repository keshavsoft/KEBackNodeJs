import express from 'express';

const router = express.Router();

import { router as routerFromCount } from "./Count/routes.js";
import { router as routerFromMin } from "./Min/routes.js";
import { router as routerFromMax } from "./Max/routes.js";
import { router as routerFromSum } from "./Sum/routes.js";
import { router as routerFromAverage } from "./Average/routes.js";

router.use("/Count", routerFromCount);
router.use("/Min", routerFromMin);
router.use("/Max", routerFromMax);
router.use("/Sum", routerFromSum);
router.use("/Average", routerFromAverage);

export { router };