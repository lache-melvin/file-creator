const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow (): void {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile(path.join(__dirname, '../../index.html'))

  win.webContents.openDevTools()
}

/* eslint-disable-next-line promise/catch-or-return */
app.whenReady().then(createWindow)

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
