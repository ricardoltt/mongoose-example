const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

});

module.exports = mongoose.model('users', usersSchema);
