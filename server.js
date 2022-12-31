import express from 'express'
import bodyParser from 'body-parser'


const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => console.log(`Listening on port ${port}`))