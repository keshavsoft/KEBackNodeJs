import express from 'express';

const router = express.Router();

import { router as routerFromAsIs } from "./AsIs/routes.js";
import { router as routerFromFieldsOnly } from "./FieldsOnly/routes.js";
import { router as routerFromTitlesOnly } from "./TitlesOnly/routes.js";
import { router as routerFromBoth } from "./Both/routes.js";

router.use("/AsIs", routerFromAsIs)
router.use("/FieldsOnly", routerFromFieldsOnly);
router.use("/TitlesOnly", routerFromTitlesOnly);
router.use("/Both", routerFromBoth);

export { router };