import { app, ipcMain } from 'electron'
import jsonfile from 'jsonfile'
import path from 'path'

ipcMain.on('get:json', async (event) => {
  const tempDir = path.join(app.getAppPath(), 'temp')

  const main = await jsonfile.readFile(path.join(tempDir, 'main.json'))
  const renderer = await jsonfile.readFile(path.join(tempDir, 'renderer.json'))

  event.sender.send('get:json:result', { main, renderer })
})
