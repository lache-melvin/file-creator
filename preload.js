const fs = require('fs')
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld(
  'fs',
  {
    readThisDir: () => fs.readdirSync(__dirname)
  }
)
