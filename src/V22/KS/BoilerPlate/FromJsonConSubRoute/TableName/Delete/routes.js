import express from 'express';

const router = express.Router();

import { router as routerFromWithPk } from "./WithPk/routes.js";

router.use("/WithPk", routerFromWithPk);

export { router };