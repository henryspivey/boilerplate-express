let express = require('express');
let app = express();
require('dotenv').config()

templates_dir = __dirname + '/views/'

const makeFilePath = (template_dir, name) => {
    return `${template_dir}${name}.html`
}

app.use('/public', express.static(__dirname+'/public'))

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




































 module.exports = app;
