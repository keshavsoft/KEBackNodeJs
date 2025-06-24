const vscode = require('vscode');
const path = require('path');

const runNodeApp = (appJsPath) => {
    const terminalName = 'node app';
    let existingTerminal = vscode.window.terminals.find(t => t.name === terminalName);

    if (existingTerminal) {
        existingTerminal.dispose(); // This stops and clears the terminal
    }

    const terminal = vscode.window.createTerminal({
        name: terminalName,
        cwd: path.dirname(appJsPath)
    });

    terminal.show(true);
    terminal.sendText(`node ${path.basename(appJsPath)}`);
};

module.exports = { runNodeApp };
