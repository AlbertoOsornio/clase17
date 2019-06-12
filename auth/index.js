const express = require('express')
const router = express.Router()


const handlerEjemplo = (request,response) => {
    response.send("hello world")
}

router.get('/login', function (req, res) {
  res.send('Login Page')
})

router.get('/logout', function (req, res) {
  res.send('logout page')
})

router.get('/recovery', function (req, res) {
    res.send('hola karla')
  })

module.exports = router