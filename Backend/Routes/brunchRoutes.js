const express = require('express');
const router = express.Router();
const Bunch = require('../Models/brunch');

router.get('/', async (req, res) => {
    try {
        const bunch = await Bunch.find();
        res.json(bunch);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const { name, price, description } = req.body;

    const newBunch = new Bunch({
        name,
        price,
        description: description.trim(),
    });

    try {
        const savedBunch = await newBunch.save();
        res.status(201).json(savedBunch);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Bunch.findByIdAndDelete(req.params.id);
        res.json({ message: 'Bunch item deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const bunch = await Bunch.findById(req.params.id);
        
        if (!bunch) {
            return res.status(404).json({ message: 'Bunch item not found' });
        }

        bunch.name = name;
        bunch.price = price;
        bunch.description = description;
        
        const updatedBunch = await bunch.save();
        res.json(updatedBunch);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
