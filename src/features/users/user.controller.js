const userService = require('./user.service');

async function create(req, res) {
    try {
        const userBody = req.body;

        const user = await userService.create(userBody);

        res.status(201).json(user);

    } catch (err) {
        res.status(400).json({ 'code': 400, 'message': 'Error to create an user', 'details': err.stack });
    }

}

async function remove(req, res) {
    try {
        const userName = await userService.remove(req.params.name);
        res.status(200).json({ status: `${req.params.name} deleted with success.` });
    } catch (err) {
        res.status(400).json({ 'code': 400, 'message': 'Error to delete an user', 'details': err.stack });
    }
}

async function update(req, res) {
    try {
        const userName = await userService.update(req.params.name, req.body);
        res.status(200).json({ status: `${req.params.name} updated to ${req.body.name}` });
    } catch (err) {
        res.status(400).json({ 'code': 400, 'message': 'Error to update an user', 'details': err.stack });
    }
}

async function get(req, res) {
    try {
        const findUsers = await userService.get()
        res.status(200).json(findUsers);
    } catch (err) {
        res.status(404).json({ 'code': 400, 'message': 'Error to find the users', 'details': err.stack });
    }
}

async function getByName(req, res) {
    try {
        const userName = await userService.getByName(req.params.name);
        res.status(200).json(userName);
    } catch (err) {
        res.status(404).json({ 'code': 400, 'message': `Error to find ${req.params.name} user`, 'details': err.stack });
    }
}

module.exports = { create, remove, update, get, getByName };
