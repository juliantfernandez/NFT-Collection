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
    },
    create: (req, res)=>{
        res.send('Create Your NFT')
    },
    detail: (req, res)=> {
        nftid = req.params.id;
        let nftobj;
        for(obj of nfts){
            if(nftid == obj.id){
                nftobj = obj
                break
            }
        }
        res.render('detail', {nft: nftobj})

    }
    
}

module.exports = controlador;