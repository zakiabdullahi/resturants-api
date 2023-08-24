const express = require('express');
const ownerDB = require('./owner-model.js');
const { requiredName } = require('../middleware/middleware.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const owners = await ownerDB.find(req.query);
        res.status(200).json(owners);
    } catch (err) {
        res.status(500).json({ message: `Failed to get owners ${err} ` });
    }
});



// ENDPOINT = API URL = RESOURCE

// Get Single restaurant


router.get('/:id', async (req, res) => {
    try {
        const owner = await ownerDB.findById(req.params.id);
        if (owner) {
            res.status(200).json(owner);
        } else {
            res.status(404).json({ message: 'owner not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Failed to get owner' });
    }
});

// Add restaurant
router.post('/', requiredName, async (req, res) => {
    try {
        const owner = await ownerDB.add(req.body);
        res.status(201).json(owner);
    } catch (err) {
        res.status(500).json({ message: 'Failed to add owner' });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const owner = await ownerDB.update(req.params.id, req.body);
        if (owner) {
            res.status(200).json(owner);
        } else {
            res.status(404).json({ message: 'owner not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Failed to update owner' });
    }
});

// DELETE

router.delete('/:id', async (req, res) => {
    try {
        const owner = await ownerDB.remove(req.params.id);
        if (owner) {
            res.status(200).json(owner);
        } else {
            res.status(404).json({ message: 'owner not found' });
        }
    } catch (err) {
        // handle error
        res.status(500).json({ message: 'Failed to delete owner' });
    }
})

module.exports = router;







