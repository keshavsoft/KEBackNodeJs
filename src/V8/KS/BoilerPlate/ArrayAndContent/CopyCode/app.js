import express from 'express';
const app = express()
const port = 3000;

import { router as routerFromFileAsArray } from "./FileAsArray/routes.js";
import { router as routerFromContentInArray } from "./ContentInArray/routes.js";

app.use(express.static('public'));

app.use('/FileAsArray', routerFromFileAsArray);
app.use('/ContentInArray', routerFromContentInArray);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});