import express from 'express';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';
import path from 'node:path';
import loginRouter from './routes/loginRouter.mjs'
import indexRouter from './routes/indexRouter.mjs'
import newRouter from './routes/newRouter.mjs'
import registerRouter from './routes/registerRouter.mjs';
import secretcodeRouter from './routes/secretcodeRouter.mjs'
import dashboardRouter from './routes/dashboardRouter.mjs'
import session from 'express-session';
import passport from './auth.mjs'
import dotenv from 'dotenv';
dotenv.config(); // This loads the .env variables

const app = express(); // Creates an instance of express() and saves it in a variable

app.use(express.urlencoded({ extended: true }));

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());
  

// Convert __dirname using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = join(__dirname, "public");
app.use(express.static(assetsPath));

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/secretcode', secretcodeRouter);
app.use('/dashboard', dashboardRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening to requests on port ${PORT}`);
});