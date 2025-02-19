import { Router } from 'express';
const dashboardRouter = Router();
import { seeMessages } from '../controllers/dashboardController.mjs';

dashboardRouter.get('/', async (req, res) => {
    const messages = await seeMessages();
    console.log("dashboardRouter messages: ", messages)
    res.render('dashboard', { user: req.user, messages: messages });
});

export default dashboardRouter;