const express = require('express')
const router = require('./auth')

const app = express()

function rootHandler(request,response){
    response.send("hola")
}

app.use('/auth',router)
app.listen(9000)

//const serveMiddleware = serveStatic(path.resolve(__dirname,'static'))
//app.use('/assets', serveMiddleware)
//app.use('/assets',express.static('static'))
//app.use(express.json())
/*
function handlerSearch(request,response){
    response.send(request.query.v)
}
function authenticationHandler(request,response){
    //response.send("auth")
    console.log("llegue a auth")
    console.log(request.body)
    response.json(request.body)
}
app.all('/',rootHandler)
app.post('/auth',authenticationHandler)
*/

