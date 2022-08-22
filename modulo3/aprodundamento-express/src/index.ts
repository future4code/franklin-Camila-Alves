import express, { Request, Response } from "express"
import cors from "cors"

// ********** EXERCÍCIO 3 **********
import { tarefas } from "./data"


const app = express()

app.use(cors())
app.use(express.json())

// ********** EXERCÍCIO 1 **********

app.get("/ping", ( request: Request, response: Response ) => {
    response.status(201).send({ message: "pong" })
})

// ********** EXERCÍCIOS 2 e 4 **********

app.get("/tarefas/:completed", ( request: Request, response: Response ) => {

    type tarefa = {
        userId: number,
        id: number,
        title: string,
        completed: boolean
    }

    const tarefaConcluida = Boolean(request.params.completed)

    const listaDeTarefasConcluidas = tarefas.map((tarefa) => {
        if (tarefa.completed === tarefaConcluida) {
            return {
                ...tarefa
            }
        }
    })

    response.send(listaDeTarefasConcluidas)
})

// ********** EXERCÍCIO 5 **********

app.post("/criaTarefa", ( request: Request, response: Response ) => {

    type novaTarefa = {
        userId: number,
        id: number,
        title: string,
        completed: boolean
    }

    const { userId, id, title, completed }: novaTarefa = request.body

    const novaTarefaCriada = {
        userId,
        id,
        title,
        completed
    }

    tarefas.push(novaTarefaCriada)

    const novaListaDeTarefas = tarefas 

    response.status(201).send(novaListaDeTarefas)
})

// ********** EXERCÍCIO 6 **********

app.post("/trocaStatus/:id", ( request: Request, response: Response ) => {

    const idTarefa = Number(request.params.id)

    const mudaStatus = tarefas.filter((tarefa) => {
        return tarefa.id === idTarefa
    }).map((tarefa) => {
        return tarefa ={
            userId: tarefa.userId,
            id: tarefa.id,
            title: tarefa.title,
            completed: !tarefa.completed
        }
    })

    console.log(mudaStatus)

    response.status(200).send(mudaStatus)
})

// ********** EXERCÍCIO 7 **********

app.delete("/deletaTarefa/:id", ( request: Request, response: Response ) => {

    const idTarefa = Number(request.params.id)

    tarefas.filter((tarefa) => {
        if (tarefa.id === idTarefa){
            response.status(200).send(`Tarefa ${idTarefa} deletada com sucesso`)
        } else {
            response.status(404).send("Essa tarefa não existe. Tente novamente")
        }
    })
})

// ********** EXERCÍCIO 8 **********

app.get("/userTarefas/:userId", ( request: Request, response: Response ) => {

    const idUsuario = Number(request.params.userId)

    tarefas.filter((tarefa) => {
        if (tarefa.userId === idUsuario){
            response.status(200).send(tarefa)
            console.log(tarefa)
        } else {
            response.status(404).send("Usuário não encontrado")
        }
    })
})

app.listen(3003, () => console.log("Servidor disponível em 3003"))
