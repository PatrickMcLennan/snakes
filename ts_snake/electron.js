const { app, BrowserWindow, Menu, shell } = require("electron");

const isMac = process.platform === `darwin`;

// click: openWindow(`https://github.com/PatrickMcLennan`),
// click: openWindow(`www.linkedin.com/in/patrick-mclennan-42002a172`),

// Menu
const menuTemplate = [
  {
    label: `Snake`,
    submenu: [
      { role: "about" },
      { type: "separator" },
      { role: "services" },
      { type: "separator" },
      { role: "hide" },
      { role: "hideothers" },
      { role: "unhide" },
      { type: "separator" },
      { role: "quit" },
    ],
  },
  {
    label: "Edit",
    submenu: [
      { role: "undo" },
      { role: "redo" },
      { type: "separator" },
      { role: "cut" },
      { role: "copy" },
      { role: "paste" },
      { role: "pasteandmatchstyle" },
      { role: "delete" },
      { role: "selectall" },
      { type: "separator" },
      { role: "reload" },
      { role: "toggleFullScreen" },
      { role: "toggleDevTools" },
      { type: "separator" },
      { role: "quit" },
    ],
  },
  {
    label: `Contact Me`,
    subMenu: [
      {
        label: `On Github`,
        click: async () => {
          const { shell } = require(`electron`);
          await shell.openExternal(`https://github.com/PatrickMcLennan`);
        },
      },
      {
        label: `On LinkedIn`,
        click: async () => {
          const { shell } = require(`electron`);
          await shell.openExternal(`www.linkedin.com/in/patrick-mclennan-42002a172`);
        },
      },
    ],
  },
];

// Run Application
const createWindow = () =>
  new BrowserWindow({
    width: 900,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
    },
  }).loadFile(`${__dirname}/dist/index.html`);

const onAppReady = () => {
  //   if (isMac) menuTemplate.unshift({ label: app.name, submenu: [{ role: `quit` }] });
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
  createWindow();
};

app.on(`ready`, onAppReady);
