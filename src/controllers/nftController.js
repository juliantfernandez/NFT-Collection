const path = require('path')
const fs = require('fs');
const nftFilePath = path.join(__dirname, '../data/nftcollection.json')
let nfts = JSON.parse(fs.readFileSync(nftFilePath, 'utf-8'))


const controlador = {
    index: (req, res) => {
        nfts = JSON.parse(fs.readFileSync(nftFilePath, 'utf-8'))
        
        res.render('index', {nft: nfts});
    },
    nftCollection: (req, res) =>{
        res.send('Colecction ')
    },
    create: (req, res)=>{
        res.render('create')
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
    },
    nftStore:(req, res) => {
        let newNFT = {
            id: nfts[nfts.length-1].id+1,
            nick: req.body.nick,
            price: req.body.price,
            image: "IMG_0421.jpeg"
        }
        nfts.push(newNFT)

        fs.writeFileSync(nftFilePath, JSON.stringify(nfts, null, " "))
        

        res.redirect('/')

        
    },
    edit:(req, res) =>{
        nftEditId = req.params.id;
        let elementnft;

        for(element of nfts){
            if (nftEditId == element.id){
                elementnft = element
                break
            }
        }
        res.render('edit' ,{nft: elementnft} )
    },
    update:(req,res) => {
        nftEditId = req.params.id;

        for(element of nfts){
            if (nftEditId == element.id){
                 element.nick = req.body.nick ,
                 element.price = req.body.price
               
                break
            }
        }

        fs.writeFileSync(nftFilePath, JSON.stringify(nfts, null, " "))
        

        res.redirect('/')
    },
    destroy:(req, res)=>{
        nftEditId = req.params.id;

        let arrnft = nfts.filter(function(elemento){
            return elemento.id != nftEditId
        })
        
        fs.writeFileSync(nftFilePath, JSON.stringify(arrnft, null, " "))
        

        res.redirect('/')
    }
    
}

module.exports = controlador;