import { ipcMain, app, BrowserWindow } from 'electron'

function createWindow (): void {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('dist/index.html')

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

// example ipc situation...
ipcMain.handle('sayHi', async (event: unknown, name: string) => {
  return `Hello, ${name}!`
})
