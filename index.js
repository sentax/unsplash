const wallpaper = require('wallpaper'),
  download = require('image-downloader'),
  uuid = require(`uuid/v4`)

doIt()

setInterval(doIt, 1000 * 60 * 15)


function doIt() {
  let fileName = uuid()

  // Download to a directory and save with the original filename
  const options = {
    url: 'https://source.unsplash.com/1920x1080',
    dest: `./wallpapers/${fileName}.jpg`                  // Save to /path/to/dest/image.jpg
  }

  download.image(options)
    .then(({ filename, image }) => {
      console.log('File saved to', filename)


      wallpaper.set(`./wallpapers/${fileName}.jpg`)
      console.log(`wallpaper set.`)

    })
    .catch((err) => {
      console.error(err)
    })


  //https://source.unsplash.com/1920x1080
}