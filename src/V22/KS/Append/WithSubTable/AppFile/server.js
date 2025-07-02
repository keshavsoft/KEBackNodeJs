const fse = require('fs-extra');

const updateServerFile = async ({ filePath, newVersion }) => {
    const content = await fse.readFile(filePath, 'utf-8');
    const lines = content.split('\n');

    const importLine = `import { router as routerFrom${newVersion} } from "./${newVersion}/routes.js";`;
    const useLine = `app.use("/${newVersion}", routerFrom${newVersion});`;

    const alreadyImported = lines.some(line => line.trim() === importLine);
    const alreadyUsed = lines.some(line => line.trim() === useLine);

    if (!alreadyImported) {
        const lastImportIndex = lines.reduce((acc, line, i) =>
            line.startsWith('import') ? i : acc, -1);
        lines.splice(lastImportIndex + 1, 0, importLine);
    }

    if (!alreadyUsed) {
        const lastUseIndex = lines.reduce((acc, line, i) =>
            line.trim().startsWith('app.use(') ? i : acc, -1);
        lines.splice(lastUseIndex + 1, 0, useLine);
    }

    await fse.writeFile(filePath, lines.join('\n'), 'utf-8');
};

module.exports = { updateServerFile };
