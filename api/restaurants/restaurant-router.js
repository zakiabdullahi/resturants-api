const express = require('express');
const restaurantsDB = require('./restaurant-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const restaurants = await restaurantsDB.find(req.query);
        res.status(200).json(restaurants);
    } catch (err) {
        res.status(500).json({ message: 'Failed to get restaurants' });
    }
});


// ENDPOINT = API URL = RESOURCE

// Get Single restaurant


router.get('/:id', async (req, res) => {
    try {
        const restaurant = await restaurantsDB.findById(req.params.id);
        if (restaurant) {
            res.status(200).json(restaurant);
        } else {
            res.status(404).json({ message: 'restaurant not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Failed to get restaurant' });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const restaurant = await restaurantsDB.update(req.params.id, req.body);
        if (restaurant) {
            res.status(200).json(restaurant);
        } else {
            res.status(404).json({ message: 'restaurant not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Failed to update restaurant' });
    }
});

// DELETE

router.delete('/:id', async (req, res) => {
    try {
        const restaurant = await restaurantsDB.remove(req.params.id);
        if (restaurant) {
            res.status(200).json(restaurant);
        } else {
            res.status(404).json({ message: 'restaurant not found' });
        }
    } catch (err) {
        // handle error
        res.status(500).json({ message: 'Failed to delete restaurant' });
    }
})

module.exports = router;







