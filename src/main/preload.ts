const fs = require('fs')
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld(
  'fs',
  {
    readThisDir: (): Array<string> => fs.readdirSync(__dirname),
    hi: (): string => 'hey!'
  }
)
