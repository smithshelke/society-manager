const path = require('path');
const MainWindow = require('./app/main_window');
const electron = require('electron');
const{app,ipcMain} = electron;
let mainWindow;

app.on('ready',()=>{
  console.log('electron started');
  mainWindow = new MainWindow(`file://${__dirname}/dist/index.html`);
});