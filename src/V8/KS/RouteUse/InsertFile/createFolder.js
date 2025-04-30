const fs = require('fs');
const path = require("path");

const StartFunc = ({ inRouteNeeded }) => {
    const LocalRouteNeeded = inRouteNeeded;

    const LocalToPath = path.join(__dirname, LocalRouteNeeded);

    fs.mkdirSync(LocalToPath);
};

module.exports = { StartFunc };
