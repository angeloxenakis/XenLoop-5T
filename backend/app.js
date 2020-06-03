const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser())
app.listen(3000)

app.get('/', (req, res) => {
    res.json({msg: "Hi"})
})

console.log("Hello World")