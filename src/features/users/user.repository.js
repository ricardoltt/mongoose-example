const userModel = require('./user.model');

async function insert(userBody) {
    return userModel.create(userBody);
}

async function remove(userName) {
    return userModel.deleteOne({ 'name': userName });
}

async function update(userName, body) {
    return userModel.findOneAndUpdate({ 'name': userName }, body);
}

async function get() {
    return userModel.find();
}

async function getByName(userName) {
    return userModel.findOne({ 'name': userName }).exec();
}

module.exports = { insert, remove, update, get, getByName };