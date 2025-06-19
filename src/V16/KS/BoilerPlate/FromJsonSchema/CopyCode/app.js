import express from 'express';
const app = express();
const port = 3000;

import { router as routerFromV1 } from "./V1/routes.js";

app.use(express.static('public'));

app.use("/V1", routerFromV1);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Open here http://localhost:${port}`);

});