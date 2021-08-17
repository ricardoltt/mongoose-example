const repository = require('./user.repository');

async function create(userBody) {
    return repository.insert(userBody);
}

async function remove(userName) {
    return repository.remove(userName);
}

async function update(userName, body) {
    return repository.update(userName, body);
}

async function get() {
    return repository.get();
}

async function getByName(userName) {
    return repository.getByName(userName);
}


module.exports = { create, remove, update, get, getByName };