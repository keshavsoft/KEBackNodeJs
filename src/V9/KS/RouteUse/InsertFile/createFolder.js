const fs = require('fs');
const path = require("path");

const StartFunc = ({ inSelectedFolderPath, inRouteNeeded }) => {
    const LocalRouteNeeded = inRouteNeeded;

    const LocalToPath = path.join(inSelectedFolderPath, LocalRouteNeeded);

    fs.mkdirSync(LocalToPath);
};

module.exports = { StartFunc };
