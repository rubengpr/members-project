import pool from './pool.mjs';
import { hashedPassword } from '../controllers/registerController.mjs';

async function registerUser(first_name, last_name, username, hashedPassword) {
    try {
        await pool.query("INSERT INTO users (username, password) VALUES ($1, $2, $3, $4)", [first_name, last_name, username, hashedPassword]);
       } catch (error) {
          console.error(error);
    }
  };

export { registerUser };