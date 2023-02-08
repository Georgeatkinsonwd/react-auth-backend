const mongoose = require('mongoose')
const {Schema, model} = mongoose



const UserSchema = new Schema({
    username: {type:String, required:true, min:[4, "Must be at least 4 letters"], unique:true },
    password: {type:String, required:true, min:[4, "Must be at least 4 letters"]}, 
});


const UserModel = model('User', UserSchema);

module.exports = UserModel;