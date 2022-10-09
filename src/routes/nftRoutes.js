const express = require('express')
const router = express.Router()

let nftController = require('./../controllers/nftController.js')
router.get('/', nftController.index)

router.get('/nftCollection', nftController.nftCollection)

router.get('/create', nftController.create)
router.post('/create', nftController.nftStore)

router.get('/detail/:id', nftController.detail )

router.get('/edit/:id' , nftController.edit)
router.post('/edit/:id', nftController.update)

router.post('/delete/:id', nftController.destroy)
module.exports = router;