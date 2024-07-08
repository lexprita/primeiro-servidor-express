import express, { Request, Response } from 'express'

const servidor = express()

// servidor.get('/', (req, res) => {

// })

const controlador = (req: Request, res: Response) => {
    return res.send('Meu primeiro servidor Node.js com e Typescript')
}

servidor.get('/home', controlador)

servidor.listen(3000)