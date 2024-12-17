const mongoose = require('mongoose');

const BunchSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        maxlength: 300, 
    },
});

module.exports = mongoose.model('Bunch', BunchSchema);
