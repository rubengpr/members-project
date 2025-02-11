import 'dotenv/config'; //Imports the .env file content
import pg from 'pg'; //Imports pg dependency, allowing Node.js applications interact with PostgreSQL databases
const { Pool, Client } = pg; //Destructures pg module to extract Pool and Client classes

console.log('DATABASE_URL:', process.env.DATABASE_URL);

// Creates a new instance from the Pool class, and marks it as exportable
export default new Pool({
    connectionString: process.env.DATABASE_URL, //
    ssl: { rejectUnauthorized: false }, // Required for Railway
  });