const fs = require('fs');

function StartFunc({ inRootPath }) {
    try {
        const filePath = "schema.json";
        const fileContents = fs.readFileSync(`${inRootPath}/${filePath}`, 'utf-8');

        return JSON.parse(fileContents);
    } catch (error) {
        console.error('Error reading .env file:', error);
        return null;
    }
};

module.exports = { StartFunc };
