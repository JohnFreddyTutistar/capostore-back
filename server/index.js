const express = require('express');
const cors = require('cors');
const {userRoutes} = require('./routes/usuario');

class Server{
    app;
    port;
    apiRoutes = {
        usuarios: '/api/usuarios'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.middlewares();
        this.routes();
    }

    routes(){
        this.app.use(this.apiRoutes.usuarios, userRoutes);
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`servidor corriendo en el puerto ${this.port}`);
        });
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }
}

module.exports = {
    Server
}