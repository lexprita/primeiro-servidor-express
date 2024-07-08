import express from 'express'

const servidor = express()

// servidor.get('/', (req, res) => {

// })

const controlador = (req, res) => {
    return res.send('Meu primeiro servidor Node.js com express')
}

servidor.get('/home', controlador)

servidor.listen(3000)