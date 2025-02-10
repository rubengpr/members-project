import express, { static as serveStatic, urlencoded } from 'express'; // Import express library
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';
import path from 'node:path';
import loginRouter from './routes/loginRouter.mjs'
import indexRouter from './routes/indexRouter.mjs'
import newRouter from './routes/newRouter.mjs'
import registerRouter from './routes/registerRoute.mjs';

const app = express(); // Creates an instance of express() and saves it in a variable

// Convert __dirname using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = join(__dirname, "public");
app.use(serveStatic(assetsPath));

app.use(urlencoded({ extended: true }));

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/', indexRouter);
app.use('/new', newRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening to requests on port ${PORT}`);
});