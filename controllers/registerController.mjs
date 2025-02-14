import { registerUser } from '../db/queries.mjs';
import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';

let hashedPassword;

async function postUser(req, res) {
    const errors = validationResult(req);
    console.log('Validation errors:', errors.array()); // Debugging
    console.log('Request body:', req.body);

    if (!errors.isEmpty()) {
        return res.render('register', { errors: errors.array(), formData: req.body });
    }

    const { first_name, last_name, username, password } = req.body;
    hashedPassword = await bcrypt.hash(password, 10);
    await registerUser(first_name, last_name, username, hashedPassword);
    res.redirect('/');
};

export { postUser, hashedPassword };

//app.post('/create-user', body('password').isLength({ min: 5 }), (req, res) => { });