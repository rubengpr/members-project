import { getUsernames, registerUser } from '../db/queries.mjs';
import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';


async function checkUsernames(value, {req}) {
    const { username } = req.body;
    
    const existingUsernames = await getUsernames();
    const usernamesArray = existingUsernames.map(user => user.username);

    if (usernamesArray.includes(username)) {
        throw new Error('Username is already taken');
    }
}

async function postUser(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.render('register', { errors: errors.array(), formData: req.body });
    }

    const { first_name, last_name, username, password } = req.body;
    let hashedPassword = await bcrypt.hash(password, 10);
    await registerUser(first_name, last_name, username, hashedPassword);
    res.redirect('/secretcode');
};

export { postUser, checkUsernames };

//app.post('/create-user', body('password').isLength({ min: 5 }), (req, res) => { });