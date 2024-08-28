const mongoose = require('mongoose');
// require('dotenv').config();

mongoose.connect("mongodb+srv://shijiththalassery:LyIHInSOUcB4uE2d@cluster0.mliegib.mongodb.net/help_center")
.then(() => console.log('Database connected'))
.catch((error) => console.log('Error', error));

module.exports = mongoose;
