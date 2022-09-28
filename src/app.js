let express = require('express');
let app = express();
let path = require('path')
app.set('view engine', 'ejs')

app.use(express.static(path.resolve(__dirname, '../public')));

const nftRoutes = require('./routes/nftRoutes')
const usersRouters = require('./routes/usersRoutes')

app.use('/', nftRoutes)

app.use('/users', usersRouters)

app.listen(3000, () =>{
    console.log('Servidor corriendo');
})

