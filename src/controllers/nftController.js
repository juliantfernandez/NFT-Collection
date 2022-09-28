const path = require('path')

const controlador = {
    index: (req, res) => {
        res.render('index', {datos: obj});
    },
    nftCollection: (req, res) =>{
        res.send('Colecction ')
    }
    
}

module.exports = controlador;