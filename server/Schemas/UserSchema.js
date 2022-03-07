const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    firstName: { type: String, required: [true, "fisrt name required"] },
    lastName: { type: String, required: [true, "last name required"] },       
    email: { type: String, required: [true, "email required"], unique: true },
    password: { type: String, required: [true, "password required"] },  
    createdDate: { type: Date, default: new Date()},    
    token: {type: String},    
});

const UserModel = mongoose.model('Users', UserSchema);
module.exports = { UserModel };