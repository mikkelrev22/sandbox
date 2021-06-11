const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

app.use(express.static(__dirname + '/../client/dist'))

app.use((req, res, next)=>{
    res.sendStatus(400)
  })
  
app.use((err, req, res, next)=>{
    console.log(err)
    res.sendStatus(500).send(err.stack)
  })

app.listen(PORT, () => {
    console.log(`server is now listening on Port ${PORT}. Nice to see you today!`)
})