
const electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow;


const createWindow = () => {
    app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    })
    mainWindow.on('show', () => { 
        mainWindow.focus(); 
    });

    mainWindow.loadFile("menu.html");
    mainWindow.show();
    mainWindow.focus();
};

app.whenReady().then(() => {
    createWindow();
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})