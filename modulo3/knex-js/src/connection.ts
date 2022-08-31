import knex from "knex";
import dotenv from "dotenv";

// dotenv.config();

const connection = knex({
   client: "mysql",
   connection: {
      host: '35.226.146.116',
      port: 3306,
      user: 'franklin-camila-alves',
      password: 'Go86XXJF7~UgbwPA8tux',
      database: 'franklin-camila-alves',
      multipleStatements: true
   },
});

export default connection