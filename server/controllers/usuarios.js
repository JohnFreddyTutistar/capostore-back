const getUsuarios = (req, res)=> {
    res.json({
        msj: "getUsuarios"
    });
}

const getUsuario = (req, res)=> {
    let id = req.params.id;
    res.json({
        msj: "getUsuario",
        id
    });
}

const postUsuario = (req, res)=> {
    let {body} = req;
    res.json({
        msj: "postUsuario",
        body
    });
    console.log("este es un body");
    console.log(body);
}

const putUsuario = (req, res)=> {
    let body = req.body;
    res.json({
        msj: "putUsuario",
        body
    });
}

const deleteUsuario = (req, res)=> {
    let id = req.params.id;
    res.json({
        msj: "deleteUsuario",
        id
    });
}

module.exports = {
    getUsuarios,
    getUsuario,
    postUsuario,
    deleteUsuario,
    putUsuario
}