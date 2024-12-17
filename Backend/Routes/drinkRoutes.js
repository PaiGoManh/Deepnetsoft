const express = require('express');
const router = express.Router();
const Drink = require('../Models/drinks');

router.get('/', async (req, res) => {
    try {
        const drinks = await Drink.find();
        res.json(drinks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const { name, price, description } = req.body;

    const newDrink = new Drink({
        name,
        price,
        description: description.trim(),
    });

    try {
        const savedDrink = await newDrink.save();
        res.status(201).json(savedDrink);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Drink.findByIdAndDelete(req.params.id);
        res.json({ message: 'Drink item deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const drink = await Drink.findById(req.params.id);
        
        if (!drink) {
            return res.status(404).json({ message: 'Drink item not found' });
        }

        drink.name = name;
        drink.price = price;
        drink.description = description;
        
        const updatedDrink = await drink.save();
        res.json(updatedDrink);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
