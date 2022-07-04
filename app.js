const express = require ('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000;

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname + '/index.html')); 
    res.sendFile(__dirname + '/index.html');
    res.sendFile(__dirname + '/public');
})

app.listen(port, () => {
    
})