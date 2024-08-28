const mongoose = require('mongoose');

// Define the schema
const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

// Create the model
const Card = mongoose.model('Card', cardSchema);

module.exports = Card; // Export the model
