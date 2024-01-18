import mongoose from "mongoose";

const animeSchema = mongoose.Schema
(   {
        title:
        {
            type: String,
            required: true,        
        },

        genre:
        {
            type: String,
            required: true,        
        },

        airYear:
        {
            type: Number,
            required: true,        
        },

        writer:
        {
            type: String,
            required: true,        
        },

        picLink:
        {
            type: String,
            required: true, 
        },
        
    },
    
    {
        timestamps: true,
    }
);

export const Anime = mongoose.model('Jujutsu Kaisen', animeSchema);
