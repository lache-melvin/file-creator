import { ipcMain, IpcMainEvent, app } from 'electron'
import { promises as fs } from 'fs'

import logger from './logger'

export default function initIpcListeners (): void {
  ipcMain.handle('saveFile', async (e: IpcMainEvent, contents: string): Promise<void> => {
    const path = app.getPath('downloads') + '/test.txt'
    try {
      await fs.writeFile(path, contents)
      logger.info('file saved')
      return null
    } catch (err) {
      logger.error(err.message)
      // needs thinking when I'm more awake
      // want to return rejected promise, but not throw in the main process...
      throw new Error('Could not save the file')
    }
  })
}
