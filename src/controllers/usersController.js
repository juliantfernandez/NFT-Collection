const path = require('path')

let userControlador = {
    register: (req,res) =>{
        res.render('register')
    },
    login: (req, res) => {
        res.render('user/login')
    }, 
    profile: (req, res) => {
        res.render('profile', {name: 'John Doe'})
    }
}

module.exports = userControlador;