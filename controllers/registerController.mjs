import { registerUser } from '../db/queries.mjs';
import bcrypt from 'bcryptjs';

let hashedPassword;

async function postUser(req, res) {
    const { first_name, last_name, username, password } = req.body;
    hashedPassword = await bcrypt.hash(password, 10);
    await registerUser(first_name, last_name, username, hashedPassword);
    res.redirect('/');
};

export { postUser, hashedPassword };