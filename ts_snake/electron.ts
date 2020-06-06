const path = require("path");
const { app, BrowserWindow } = require("electron");

const createWindow = () =>
  new BrowserWindow({
    width: 1500,
    height: 1000,
    webPreferences: {
      nodeIntegration: true,
    },
  }).loadFile(`${__dirname}/dist/index.html`);

app.on(`ready`, createWindow);
