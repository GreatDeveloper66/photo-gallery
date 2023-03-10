import express from 'express'
import bodyParser from 'body-parser'


const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/api/hello', (req,res) => {
    res.send({ express: 'Hello from express on the hello route'})
})

app.get('/api/world', (req,res) => {
    console.log(req.body)
    res.send(`I received your POST request. This is what you sent me: ${req.body.post}`)
})

app.listen(port, () => console.log(`Listening on port ${port}`))