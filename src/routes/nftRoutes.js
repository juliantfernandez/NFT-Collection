const express = require('express')
const router = express.Router()

let nftController = require('./../controllers/nftController.js')
router.get('/', nftController.index)

router.get('/nftCollection', nftController.nftCollection)



module.exports = router;