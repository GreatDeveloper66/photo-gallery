import * as express from 'express'
import * as bodyParser from 'body-parser'


const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())