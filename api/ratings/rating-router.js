const express = require('express');
const ratingDB = require('./rating-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const ratings = await ratingDB.find(req.query);
        res.status(200).json(ratings);
    } catch (err) {
        res.status(500).json({ message: 'Failed to get ratings' });
    }
});


// ENDPOINT = API URL = RESOURCE

// Get Single restaurant


router.get('/:id', async (req, res) => {
    try {
        const rating = await ratingDB.findById(req.params.id);
        if (rating) {
            res.status(200).json(rating);
        } else {
            res.status(404).json({ message: 'rating not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Failed to get rating' });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const rating = await ratingDB.update(req.params.id, req.body);
        if (rating) {
            res.status(200).json(rating);
        } else {
            res.status(404).json({ message: 'rating not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Failed to update rating' });
    }
});

// DELETE

router.delete('/:id', async (req, res) => {
    try {
        const rating = await ratingDB.remove(req.params.id);
        if (rating) {
            res.status(200).json(rating);
        } else {
            res.status(404).json({ message: 'rating not found' });
        }
    } catch (err) {
        // handle error
        res.status(500).json({ message: 'Failed to delete rating' });
    }
})

module.exports = router;







