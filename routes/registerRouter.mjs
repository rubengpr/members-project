import { Router } from 'express';
const registerRouter = Router();
import { postUser, checkUsernames } from '../controllers/registerController.mjs';
import { body } from 'express-validator';

registerRouter.get('/', (req, res) => {
    res.render('register', { formData: req.body });
});

registerRouter.post("/",
    [
        body('first_name')
        .isLength( {min: 2} ).withMessage('Minimum 2 characters')
        .isLength( {max: 12} ).withMessage('Maximum 12 characters')
        .matches(/^[a-zA-ZáéíóúüàèìòùñÁÉÍÓÚÀÈÌÒÙÑ '-]*$/).withMessage('Only letters, spaces and hypens are allowed'),
        body('last_name')
        .isLength( {min: 2} ).withMessage('Minimum 2 characters')
        .isLength( {max: 12} ).withMessage('Maximum 12 characters')
        .matches(/^[a-zA-ZáéíóúüàèìòùñÁÉÍÓÚÀÈÌÒÙÑ '-]*$/).withMessage('Only letters, spaces and hypens are allowed'),
        body('username')
            .isLength({min:5}).withMessage('Minimum 2 characters')
            .isLength({max:20}).withMessage('Maximum 20 characters')
            .isAlphanumeric().withMessage('Username should only contain letters and numbers')
            .matches(/^[a-zA-Z-_]*$/).withMessage('Only English letters and hypens are allowed')
            .custom(checkUsernames),
        body('password')
        .isLength({min:8}).withMessage('Password must have at least 5 characters')
        .matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z\d!@#$%^&*(),.?":{}|<>]+$/).withMessage('Password should contain at least one capital letter, one number and one special character'),
        body('repeatPassword').custom((value, {req}) => {
            if (value !== req.body.password) {
                throw new Error('Passwords do not match');   
            }
            return true;
        })
        ],
        postUser);

export default registerRouter;