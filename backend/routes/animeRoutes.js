import express from 'express';
import { Anime } from '../models/animeModel.js';

const router = express.Router();

//getting all anime
router.get('/', async (request, response) =>
{
    try 
    {
        const anime = await Anime.find({});

        return response.status(200).json(anime);
    }

    catch(error)
    {
        console.error(error.message);
        response.status(500).send({message : error.message});
    }
});

//getting anime by ID
router.get('/:id', async (request, response) =>
{
    try 
    {
        const {id} = request.params;
        const anime = await Anime.findById(id);
        
        return response.status(200).json(anime);
    }

    catch(error)
    {
        console.error(error.message);
        response.status(500).send({message : error.message});
    }
});

//creating anime
router.post('/', async (request, response) =>
{
    try 
    {
        if 
        (
            !request.body.title ||
            !request.body.genre ||
            !request.body.airYear||
            !request.body.writer ||
            !request.body.picLink
        )

        {
            return response.status(400).send({
                message: "Send all required fields: Title, Genre, AirYear, Writer, Picture Link",
            }); 
        }

        const newAnime =
        {
            title: request.body.title,
            genre: request.body.genre,
            airYear: request.body.airYear,
            writer: request.body.writer,
            picLink:request.body.picLink
        };

        const anime = await Anime.create(newAnime);
        return response.status(201).send(anime);
    }

    catch (error)
    {
        console.error(error.message);
        response.status(500).send({message  : error.message});
    }
});

//Update by ID
router.put('/:id', async (request, response) =>
{
    try
    {
        if  
        (
            !request.body.title ||
            !request.body.genre ||
            !request.body.airYear||
            !request.body.writer ||
            !request.body.picLink
        )

        {
            return response.status(400).send({
                message: "Send all required fields: Title, Genre, AirYear, Writer, Picture Link",
            }); 

        }

        const { id } = request.params; 
        const result = await Anime.findByIdAndUpdate(id, request.body);

        if (!result)
        {
            return response.status(404).json({message: "Anime not found."});
        }
    
        return response.status(200).json({message: "Anime updated successfully."});
    }

    catch(error)
    {
        console.log(error.message);
        response.status(500).send({message : error.message});
    }
}); 

//Delete by ID
router.delete('/:id', async (request, response) =>
{
    try
    {
        const { id } = request.params; 
        const result = await Anime.findByIdAndDelete(id);

        if (!result)
        {
            return response.status(404).json({message: "Anime not found."});
        }
    
        return response.status(200).json({message: "Anime deleted successfully."});
    }

    catch(error)
    {
        console.log(error.message);
        response.status(500).send({message : error.message});
    }
}); 

export default router;