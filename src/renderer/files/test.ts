// import { promises as fs } from 'fs'
import { ipcRenderer } from 'electron'

export async function saveFile (contents: string): Promise<void> {
  try {
    await ipcRenderer.invoke('saveFile', contents)
  } catch (err) {
    console.log(err)
  }
}
