import 'dotenv/config'; //Imports the .env file content
import pg from 'pg'; //Imports pg dependency, allowing Node.js applications interact with PostgreSQL databases
const { Pool, Client } = pg; //Destructures pg module to extract Pool and Client classes

const pool = new Pool({
  connectionString: process.env.DATABASE_PUBLIC_URL,
  ssl: { rejectUnauthorized: false },
});

export default pool; // Export the pool for use in other files
