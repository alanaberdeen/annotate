const express = require('express')
const bodyParser = require('body-parser')
const fsp = require('fs').promises
const path = require('path')
const chalk = require('chalk')
const ip = require('ip')

// Check for images in the data/images/
// Write a file an array of the available images as reference.
async function checkForImages () {
  const images = await walk('data/images')
  const json = JSON.stringify(images)
  await fsp.writeFile('data/images.json', json, 'utf8')
}

// Recursively build the filetree by searching through all directories
// Do not search inside DZI file directories (too many irrelevant files)
// ignore .DS_store files
async function walk (dir, fileList = []) {
  const files = await fsp.readdir(dir)
  for (const file of files) {
    const stat = await fsp.stat(path.join(dir, file))

    if (stat.isDirectory() && !file.endsWith('_files')) {
      fileList.push({
        name: path.basename(file),
        children: []
      })

      const children = fileList[fileList.length - 1].children
      await walk(path.join(dir, file), children)
    } else if (file !== '.DS_Store' && !file.endsWith('_files')) {
      fileList.push({
        name: path.basename(file),
        ext: path.extname(file)
      })
    }
  }
  return fileList
}

async function saveAnnotation (data) {
  // Get the IP address of the current machine. If we need to write a new raster
  // file we should save the link to it using the IP address. This ensures the
  // API endpoint where the image can be found is referenced correctly even
  // when using AIDA over a network connection.
  const networkIPAddress = ip.address()

  // Check for raster image items and if found we need to save these as image
  // files and replace the item.source with link to that file.
  data.annotationData.layers.forEach(layer => {
    layer.items.forEach((item, index) => {
      if (item.type === 'raster' && item.source.substring(0, 4) === 'data') {
        const imagePath = 'data/annotations/raster/' + index + '_' + layer.name + '.png'
        saveRaster(item.source, imagePath)

        // Edit the source link to correctly reference the API endpoint where
        // the image is available.
        const apiEndpoint = 'annotations/raster/' + index + '_' + layer.name + '.png'
        item.source = 'http://' + networkIPAddress + ':3000/' + apiEndpoint
      }
    })
  })

  // Write annotation data as JSON file.
  const imageName = data.projectImageName
  const annotationFilePath = 'data/annotations/' + imageName + '.json'
  const json = JSON.stringify(data.annotationData)
  await fsp.writeFile(annotationFilePath, json, 'utf8')
}

function saveRaster (dataURL, path) {
  const base64Data = dataURL.replace(/^data:image\/(png|gif|jpeg);base64,/, '')
  fsp.writeFileSync(path, base64Data, 'base64')
}

async function startServer () {
  const app = express()
  const port = 3000

  // Allow CORS
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })

  // Need to parse POST Body data (for parsing application/json)
  // Increase the limit from the default (100kb) to enable large annotation JSON
  // files
  app.use(bodyParser.json({
    limit: '100mb'
  }))

  // Save annoation data
  app.post('/save', async function (req, res) {
    try {
      await saveAnnotation(req.body)
      res.send('Success, annotation data saved')
    } catch (err) {
      console.log('Data could not be saved')
      console.log(err)
      res.send('Failed, annotation data could not be saved')
    }
  })

  // Check for images that may have been added to the directory
  app.post('/checkForImages', async function (req, res) {
    try {
      await checkForImages()
      res.send('Success, found images')
    } catch (err) {
      console.log('Could not check for images')
      console.log(err)
      res.send('Failed, could not find images')
    }
  })

  // Serve image files
  app.use('/images', express.static('data/images', {}))

  // Serve static annotation data
  // Always respond with headers that disable the cache. Specifically this is
  // important when editing raster images. Without this, when the editor is
  // reloaded the browser will serve the original, pre-edit, from the cache.
  app.use('/annotations', express.static('data/annotations', {
    setHeaders: function (res, path) {
      res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private')
    }
  }))

  // Serve the built application
  app.use(express.static('.'))

  // Get the IP address of the current machine. The application will also be
  // usable over the network from this address.
  const networkIPAddress = ip.address()

  // Listen to requests
  app.listen(port, () => {
    console.log(`  AIDA running at:`)
    console.log('  - Local:   ' + chalk.cyan(`http://localhost:${port}/`))
    console.log('  - Network: ' + chalk.cyan(`http://` + networkIPAddress + `:${port}/`))
  })
}

startServer()
