
const express = require('express')
const gtts = require('node-gtts')('en')
const app = express()
var path = require('path')

app.get('/speech', (req,res) => {
    gtts.save("audio.AAC","Hello world my name is Amr", function () {
        console.log("converted")
      
})
})





