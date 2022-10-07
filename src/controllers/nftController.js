const path = require('path')
const fs = require('fs');
const nftFilePath = path.join(__dirname, '../data/nftcollection.json')
const nfts = JSON.parse(fs.readFileSync(nftFilePath, 'utf-8'))


const controlador = {
    index: (req, res) => {
        res.render('index', {nft: nfts});
    },
    nftCollection: (req, res) =>{
        res.send('Colecction ')
    }
    
}

module.exports = controlador;