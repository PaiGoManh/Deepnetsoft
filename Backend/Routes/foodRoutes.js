const express = require('express');
const router = express.Router();
const Food = require('../Models/food');

router.get('/', async (req, res) => {
    try {
        const foods = await Food.find();
        res.json(foods);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const { name, price, description } = req.body;

    const newFood = new Food({
        name,
        price,
        description: description.trim(),
    });

    try {
        const savedFood = await newFood.save();
        res.status(201).json(savedFood);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Food.findByIdAndDelete(req.params.id);
        res.json({ message: 'Food item deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const food = await Food.findById(req.params.id);
        
        if (!food) {
            return res.status(404).json({ message: 'Food item not found' });
        }

        food.name = name;
        food.price = price;
        food.description = description;
        
        const updatedFood = await food.save();
        res.json(updatedFood);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
