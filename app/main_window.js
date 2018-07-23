const electron = require('electron');
const {BrowserWindow} = electron;

class MainWindow extends BrowserWindow{
  constructor(url){
    super({
      height: 500,
      width: 800,
    });
    this.loadURL(url);
  }
}
module.exports= MainWindow;
