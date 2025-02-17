import { Router } from 'express';
const secretcodeRouter = Router();

secretcodeRouter.get('/', (req, res) => {
    res.render('secretcode');
});

export default secretcodeRouter;