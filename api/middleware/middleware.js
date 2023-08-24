
const owners = require('../owners/owner-model');

module.exports = {
    async requiredName(req, res, next) {

        let name = req.body.name;
        if (!name) {
            return res.status(400).json({ message: 'Name is required' });
        }

        next();

    }

}