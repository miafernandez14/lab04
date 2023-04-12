const express = require('express')

const app = express()

app.get('/',(req,res) => {
    res.sendFile('./static/index.html',{
        root: __dirname
    })
})

app.get('/clientes',(req,res) => {
    res.sendFile('./static/clientes.html',{
        root: __dirname
    })
})
app.get('/productos',(req,res) => {
    res.sendFile('./static/productos.html',{
        root: __dirname
    })
})

app.listen(5000)
console.log('Server on port ${5000}')