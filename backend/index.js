import express from 'express';
import { PORT, mongoDBURL } from "./config.js";
import { Anime } from './models/animeModel.js';
import mongoose from "mongoose";
import animeRoutes from "./routes/animeRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

/*app.use
(
    cors
    (
        {
            origin: 'http://localhost:5555',
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type'],
        }
    )
);
*/
app.use('/anime', animeRoutes);

mongoose
    .connect(mongoDBURL)
    .then(() =>
    {
        console.log("Blank Slate has been connected...");
        app.listen(PORT, () =>
        {
            console.log(`App is listening to Port: ${PORT}`);

        });
    })
    .catch((error) =>
    {
        console.log(error);
    });