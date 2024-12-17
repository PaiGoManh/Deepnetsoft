const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const foodRoutes = require('./Routes/foodRoutes')
const bunchRoutes = require('./Routes/brunchRoutes')
const drinkRoutes = require('./Routes/drinkRoutes')



const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/foods', foodRoutes);
app.use('/bunch', bunchRoutes);
app.use('/drink', drinkRoutes);



mongoose.connect('mongodb://localhost:27017/Deepnetsoft',)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log('Error connecting to MongoDB:', err));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));