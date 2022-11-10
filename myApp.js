let express = require('express');
let app = express();
console.log("Hello World");

templates_dir = __dirname + '/views/'

const makeFilePath = (template_dir, name) => {
    return `${template_dir}${name}.html`
}

app.use('/public', express.static(__dirname+'/public'))

app.get('/', (req, res)=> {
    res.sendFile(makeFilePath(templates_dir, 'index'))
})

app.get('/json', (req, res) => {
    res.json({"message": "Hello json"})
})




































 module.exports = app;
