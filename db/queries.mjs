import pool from './pool.mjs';

async function registerUser(first_name, last_name, username, hashedPassword) {
    try {
        await pool.query("INSERT INTO users (first_name, last_name, username, password) VALUES ($1, $2, $3, $4)", [first_name, last_name, username, hashedPassword]);
       } catch (error) {
          console.error(error);
    }
  };

async function getUsernames() {
  try {
    const result = await pool.query("SELECT username FROM users");
    return result.rows;
  } catch (error) {
    console.error(error);
  }
}

async function postMessage(message_title, message_text, username) {
  try {
    await pool.query("INSERT INTO messages (title, text, author, timestamp) VALUES ($1, $2, $3, CURRENT_TIMESTAMP)", [message_title, message_text, username]);
  } catch (error) {
    console.error(error);
  }
}

export { registerUser, getUsernames, postMessage };