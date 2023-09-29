const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, min: 6, max: 15, unique: true},
    password: {type: String, required: true, min: 6, max: 15},
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;