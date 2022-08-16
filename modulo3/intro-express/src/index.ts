import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())

// Exercício 1
app.get("/funcaoGet", (request: Request, response: Response) => {          
    response.status(201).send({ message: "Endpoint criado" })
})

// Exercício 2 e 3

app.post('/todos/:id',(request:Request,response:Response)=>{

    const idUser = Number(request.params.id)

    const arrayId = [
        {
            id: 1, 
            name: 'Camila', 
            phone: 42999959999, 
            email: "camila@mail.com",
            website: "https://cami.web.com"
        },
        {
            id: 2, 
            name: 'Ruth', 
            phone: 819999679999, 
            email: "ruth@mail.com",
            website: "https://ruth.web.com"
        },
        {
            id: 3, 
            name: 'Wanuzia', 
            phone: 319999829999, 
            email: "wan@mail.com",
            website: "https://wanuzia.web.com"
        },
        {
            id: 4, 
            name: 'Joe', 
            phone: 819999679999, 
            email: "ruth@mail.com",
            website: "https://ruth.web.com"
        }]


    const usuario = arrayId.find((person)=>{
        return person.id === idUser
    })

    response.status(200).send({usuario})
})

// Exercício 4
app.get('/todos', (request: Request, response: Response) => {
    
    const users = [
        {
            id: 1, 
            name: 'Camila', 
            phone: 42999959999, 
            email: "camila@mail.com",
            website: "https://cami.web.com"
        },
        {
            id: 2, 
            name: 'Ruth', 
            phone: 819999679999, 
            email: "ruth@mail.com",
            website: "https://ruth.web.com"
        },
        {
            id: 3, 
            name: 'Wanuzia', 
            phone: 319999829999, 
            email: "wan@mail.com",
            website: "https://wanuzia.web.com"
        },
        {
            id: 4, 
            name: 'Joelly', 
            phone: 869999123999, 
            email: "ruth@mail.com",
            website: "https://ruth.web.com"
        }]

    response.status(201).send({ users })    
})

// Exercício 5, 6 e 8
// Acho mais fácil criar os posts dentro do array de usuários 

app.post('/post/:id',(request:Request,response:Response)=>{

    const idPost = Number(request.params.id)

    const arrayPost = [
        {
            id: 1, 
            title: 'Férias', 
            body: 'Finalmente os refrescos', 
            userId: "@cami"
        },
        {
            id: 2, 
            title: 'Viagem', 
            body: 'Mais uma pra lista', 
            userId: "@ruth"
        },
        {
            id: 3, 
            title: 'Encontro', 
            body: 'A gente trabalha, mas se diverte', 
            userId: "@wanuzia"
        },
        {
            id: 2, 
            title: 'Cachorro', 
            body: 'Meu companheirinho', 
            userId: "@joelly"
        }
    ]

    const feed = arrayPost.find((post)=>{
        return post.id === idPost
    })

    response.status(200).send({feed})
})

// Exercicio 8
app.get('/post',(request:Request,response:Response)=>{

    const posts = [
        {
            id: 1, 
            title: 'Férias', 
            body: 'Finalmente os refrescos', 
            userId: "@cami"
        },
        {
            id: 2, 
            title: 'Viagem', 
            body: 'Mais uma pra lista', 
            userId: "@ruth"
        },
        {
            id: 3, 
            title: 'Encontro', 
            body: 'A gente trabalha, mas se diverte', 
            userId: "@wanuzia"
        },
        {
            id: 2, 
            title: 'Cachorro', 
            body: 'Meu companheirinho', 
            userId: "@joelly"
        }
    ]

    response.status(201).send({posts})
})

app.listen(3003, () => {
    console.log(`servidor esta rodando na porta localhost:3003`)
})
