const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

const StartFunc = (dirPath) => {
    const termName = 'node app';
    const term = vscode.window.terminals.find(t => t.name === termName);
    if (term) term.dispose();

    const terminal = vscode.window.createTerminal({ name: termName, cwd: dirPath });
    terminal.show(true);

    if (!fs.existsSync(path.join(dirPath, 'node_modules'))) {
        terminal.sendText('npm i');
    }

    terminal.sendText(termName);
};

module.exports = { StartFunc };
