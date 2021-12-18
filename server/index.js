require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/tienda',(req, res) => {
    res.send('api ok');
});

app.listen(process.env.PORT, ()=> {
    console.log('Escuchando en el puerto', process.env.PORT);
})