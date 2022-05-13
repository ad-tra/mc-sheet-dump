const nodeHtmlToImage = require('node-html-to-image')
let data = require('./sheetDump.json').map((el,i) => ({...el, output: `./images/${i}.png`}))

nodeHtmlToImage({
    output: './image.png',
    html: '<html style=" background: white; "><body style=" display: flex; align-items: center; justify-content: center; height: 823px; width: 823px; background: black; /* padding: 95px; */ "><p style=" color: #cccccc; font-family: SF Pro Text Regular; font-size: 35px; padding: 0 43px; letter-spacing: 0.5px; word-spacing: 1px; line-height: 50px; ">{{text}}</p></body></html>',
    content: data
}) .then(() => console.log('The image was created successfully!'))