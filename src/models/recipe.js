import { Schema, model } from 'mongoose';

const ingredientSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

export default model(
    'Recipe',
    new Schema(
        {
            name: {
                type: String,
                required: true,
                trim: true,
            },
            description: {
                type: String,
                required: true,
                trim: true,
            },
            photo: {
                type: String,
                required: false,
                trim: true,
            },
            calories: {
                type: Number,
                required: true,
            },
            cookingTime: {
                type: Number,
                required: true,
            },
            ingredients: {
                type: [ingredientSchema],
                required: true,
            },
        },
        {
            timestamps: true,
        }
    )
);
