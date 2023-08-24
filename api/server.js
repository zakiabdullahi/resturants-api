const express = require('express');
const server = express();

server.use(express.json());


const restaurantRouter = require('./restaurants/restaurant-router.js');
const ratingRouter = require('./ratings/rating-router.js');
const ownerRouter = require('./owners/owner-router.js');

server.use('/api/restaurants', restaurantRouter);
server.use('/api/ratings', ratingRouter);
server.use('/api/owners', ownerRouter);

server.use("*", (req, res) => {
    res.status(404).send({ message: `${req.method} ${req.url} not found` });
})

module.exports = server