import { Router } from 'express';
const newRouter = Router();
import {createMessage } from '../controllers/newController.mjs';

newRouter.get('/', (req, res) => {
    res.render('new')
});

newRouter.post('/', createMessage);

export default newRouter;