import { Router } from 'express';
const loginRouter = Router();
import passport from '../auth.mjs'

loginRouter.get('/', (req, res, err) => {
  res.render('login');
});

loginRouter.post('/',
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  })
);

export default loginRouter;