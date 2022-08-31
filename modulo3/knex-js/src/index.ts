import { Request, Response } from "express"
import app from "./app"
import connection from "./connection"

app.get("/actors", async (req: Request, res: Response) => {
    try {
        const result = await connection.raw(`SELECT id, name FROM Acot`)
        console.log(result);
    } catch(error) {
        console.log(error);
    }
});

// const getActorById = async (id: string): Promise<any> => {
//     const result = await connection.raw(`
//         SELECT * FROM Actor WHERE id = '${id}'    
//     `)

//     return result[0][0]
// }

// getActorById("001")
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.log(err)
//     });

// (async () => {
//     console.log(await getActorById("001"))
// })()

// app.get("/users/:id", async (req: Request, res: Response) => {
//     try {
//         const id = req.params.id

//         console.log(await getActorById(id))

//         res.end()
//     } catch (error) {
//         console.log(error.message)
//         res.status(500). send("Unexpected error")
//     }
// })
