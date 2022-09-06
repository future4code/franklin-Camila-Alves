# RESPOSTAS

## Exercício 1

a) 

A seleção da resposta do id do user é semelhante a seleção que seria feita no mysql. Nesse caso será **selecionado e retornado todas as informações do ator que que tiver id "tal"**. 

b) 

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

c) 

app.get("/actors/:gender", async (req: Request, res: Response) => {
    const countActors = async (gender: string): Promise<any> => {
        const result = await connection.raw(`
          SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
        `);
          // Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
          // o valor no resultado!
        const count = result[0][0].count;
        return count;
    }

    try {

        const gender = req.params.gender
        console.log(await countActors(gender))
        res.end()

    } catch(error) {
        console.log(error)
    }
    
})

## Exercício 2

a) 

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

b) 

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

c) 

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

## Exercício 3

a) 

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

b) 

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

## Exercício 4

a) 

app.put("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.id, req.body.salary);
    res.status(200).send({
      message: "Success",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

b) 

app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

