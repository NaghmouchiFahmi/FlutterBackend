import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import loadMongoDB from './src/config/db.js';
import RecipeRouter from './src/routes/recipe.router.js';
import ReviewRouter from './src/routes/review.router.js';


import { PORT } from './src/config/env.js';
import { errorHandler, notFound } from './src/middlewares/error-handlers.js';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

app.use('/recipe', RecipeRouter);
app.use('/review', ReviewRouter);


app.use(
    '/img',
    express.static('public/images', {
        extensions: ['jpg', 'jpeg', 'png'],
    })
);

app.use(notFound);
app.use(errorHandler);

await loadMongoDB(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
