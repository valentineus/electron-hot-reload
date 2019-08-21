import { app, ipcMain } from 'electron'
import jsonfile from 'jsonfile'
import path from 'path'

import { mainReloader, rendererReloader } from '../../../../dist'

const tempDir = path.join(app.getAppPath(), 'temp')
const tempMain = path.join(tempDir, 'main.json')
const tempRend = path.join(tempDir, 'renderer.json')

mainReloader(tempMain)
rendererReloader(tempRend)

ipcMain.on('reload:main', async () => {
  await jsonfile.writeFile(tempMain, { time: Date.now() })
})

ipcMain.on('reload:renderer', async () => {
  await jsonfile.writeFile(tempRend, { time: Date.now() })
})
