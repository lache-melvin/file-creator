import { ipcMain, app } from 'electron'

export default function initIpcListeners (): void {
  ipcMain.handle('getDownloadsPath', (): string => {
    return app.getPath('downloads')
  })
}
