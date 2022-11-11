let express = require('express');
let app = express();
require('dotenv').config()
const bodyParser = require('body-parser');
templates_dir = __dirname + '/views/'

const makeFilePath = (template_dir, name) => {
    return `${template_dir}${name}.html`
}

app.use('/public', express.static(__dirname+'/public'))
app.use(bodyParser.urlencoded({extended:false}))

app.all('*',(req, res, next)=>{
    const method = req.method
    const path = req.path 
    const ip = req.ip     
    console.log(`${method} ${path} - ${ip}`)
    next()
})

app.get('/', (req, res)=> {
    res.sendFile(makeFilePath(templates_dir, 'index'))
})

app.get('/json', (req, res) => {
    let message="Hello json"
    if(process.env['MESSAGE_STYLE'] === 'uppercase') message = message.toUpperCase()
    res.json({"message": message})
})

app.get('/now', (req, res, next) => {
    // const time = req.time
    req.time = new Date().toString()
    res.locals.time = req.time
    next()
}, (req, res, next) => {
    res.json({'time':res.locals.time})
})

app.get('/:word/echo', (req, res) => {
    const {word} = req.params
    res.json({'echo':word})
})

app.get('/name', (req, res) => {
    const {first, last} = req.query 
    res.json({name: `${first} ${last}`})
})


























 module.exports = app;
