const express = require('express')
const app = express()
const PORT = process.env.PORT
const path = require('path')

app.use(express.static(path.join(__dirname, '/../dist')))

app.listen(PORT, () => {
    console.log(`server is now listening on Port ${PORT}. Nice to see you today!`)
})