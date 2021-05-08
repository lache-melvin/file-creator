import { ipcMain, IpcMainEvent, app } from 'electron'
import { promises as fs } from 'fs'

export default function initIpcListeners (): void {
  ipcMain.handle('saveFile', async (e: IpcMainEvent, contents: string): Promise<void | string> => {
    const path = app.getPath('downloads') + '/test.txt'
    try {
      await fs.writeFile(path, contents)
      return null
    } catch (err) {
      return err.message
    }
  })
}
