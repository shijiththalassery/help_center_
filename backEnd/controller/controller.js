const two = require('../config/mongoDB')
const Card = require('../model/cardModel')


const check = async(req, res)=>{
    console.log(req.body)
    res.status(200).json('okey');
}


const submitCards = async(req, res)=>{
    try {
        console.log(req.body)

        const { title, description } = req.body;

        if(title.trim() == "" && !title && description.trim() && !description){
            res.status(400).json('no data');
            return;
        }
        const newCard = new Card({
            title,
            description
        });

        // Save the card to the database
        const savedCard = await newCard.save();

        // Respond with the saved card
        res.status(200).json(savedCard);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const getCards = async (req, res) => {
    try {
        // Fetch all cards from the database
        const cards = await Card.find();

        // Respond with the cards
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const searchCard = async (req, res) => {
    try {
        const { title } = req.params;

        // Perform a case-insensitive search for cards with titles starting with the provided prefix
        const cards = await Card.find({
            title: { $regex: `^${title}`, $options: 'i' }
        });

        // Respond with the matching cards
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports={
    submitCards,
    getCards,
    searchCard,
    check
}