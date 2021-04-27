import { app, BrowserWindow } from 'electron'

import initIpcListeners from './ipcMain'

function createWindow (): void {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  })

  win.loadFile('dist/index.html')

  win.webContents.openDevTools()
}

app.on('activate', (): void => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.on('window-all-closed', (): void => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

async function start (): Promise<void> {
  // wait for electron to initialise
  await app.whenReady()

  // set up messaging between main and renderer processes
  initIpcListeners()

  // create and show the browser window
  await createWindow()
}

start()
