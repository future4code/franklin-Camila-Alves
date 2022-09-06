import { Request, response, Response } from "express"
import app from "./app"
import connection from "./connection"

app.get("/actors", async (req: Request, res: Response) => {
    try {
        // const result = await connection.raw(`SELECT id, name from Actor`)
        const result = await connection("Actor")
        console.log(result)

        // res.send(result[0][0])
        res.send(result)
    } catch(error) {
        console.log(error)
    }
});

app.post("/actor", async (req: Request, res: Response) => {
    try {
        await connection.raw(`
            INSERT INTO Actor (id, name, salary, birth_date, gender)
            VALUES(
                ${Date.now().toString()},
                "${req.body.name}",
                ${req.body.salary},
                "${req.body.birth_date}",
                "${req.body.gender}"
            )
        `)

        res.status(201).send("Success!")
    } catch (error) {
        console.log(error)
        res.status(500).send("An unexpected error occurred")
    }
})

app.put('/actor/:id', async (req: Request, res: Response) => {
    try {
        await connection("Actor").update({
            name: req.body.name,
            salary: req.body.salary,
            birth_date: req.body.birth_date,
            gender: req.body.gender
        }).where({
            id: req.params.id
        })

        res.send("Success!")

    } catch (error) {
        console.log(error)
        res.status(500).send("An unexpected error occurred")
    }
})

app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        const linhasDeletadas = await connection("Actor")
        .delete()
        .where({
            id: req.params.id
        })

        if(linhasDeletadas === 0) {
            throw new Error()
        }

        res.send("Success!")

    } catch (error) {
        console.log(error)
        res.status(500).send("An unexpected error occurred")
    }
})

// Esse arquivo seria o index.ts

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}

// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    console.log(await getActorById(id))

    res.end()
  } catch (error) {
		console.log(error)
    res.status(500).send("Unexpected error")
  }
}) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal


app.get("/actor/:name", async (req: Request, res: Response) => {
    
    const getActorByName = async (name: string): Promise<any> => {

        const result = await connection.raw(`
          SELECT * FROM Actor WHERE name = '${name}'
        `)
      
        return result[0][0]
    }
    
    try {

        const name = req.params.name
        console.log(await getActorByName(name))
        res.send(await getActorByName(name))

    } catch(error) {
        console.log(error)
    }
});

const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
      // Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
      // o valor no resultado!
    const count = result[0][0].count;
    return count;
}

app.get("/actors/:gender", async (req: Request, res: Response) => {
    try {

        const gender = req.params.gender
        console.log(await countActors(gender))
        res.end()

    } catch(error) {
        console.log(error)
    }
    
})

app.put('/update-actor-salary/:id', async (req: Request, res: Response) => {
    try {
        await connection("Actor").update({
            salary: req.body.salary
        }).where({
            id: req.params.id
        })

        res.send("Success!")

    } catch (error) {
        console.log(error)
        res.status(500).send("An unexpected error occurred")
    }
})

app.get("/avg-actors-salary/:gender", async (req: Request, res: Response) => {
    const avgSalary = async (gender: string): Promise<any> => {
        const result = await connection("Actor")
          .avg("salary as average")
          .where({ gender });
      
        return result[0].average;
      };

    try {

        const gender = req.params.gender
        console.log(await avgSalary(gender))
        res.end()

    } catch(error) {
        console.log(error)
    }
    
})

app.get("/actor-ex3/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const actor = await getActorById(id);
  
      res.status(200).send(actor)
    } catch (error) {
      res.status(400).send({
        message: error,
      });
    }
});

app.get("/actors-by-gender", async (req: Request, res: Response) => {
try {
    const count = await countActors(req.query.gender as string);
    res.status(200).send({
    quantity: count,
    });
} catch (err) {
    res.status(400).send({
    message: err,
    });
}
});