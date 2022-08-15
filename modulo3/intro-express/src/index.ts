import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())

app.get("/funcaoGet", (request: Request, response: Response) => {          
    response.status(201).send({ message: "Endpoint criado" })
})

app.post("/sendUser", (request: Request, response: Response) => {
    // const token = request.headers.authorization
    const user = request.body
    console.log(user)

    response.status(201).send({ message: "Usuário criado com sucesso" })
})

// 1:55:00

app.listen(3003, () => {
    console.log(`servidor esta rodando na porta localhost:3003`)
})
