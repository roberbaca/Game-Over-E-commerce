const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    firstName: { type: String, required: [true, "fisrt name required"] },
    lastName: { type: String, required: [true, "last name required"] },    
    age: { type: Number, default: 18 },
    email: { type: String, required: [true, "email required"], unique: true },
    password: { type: String, required: [true, "password required"] },  
    createdDate: { type: Date, default: new Date()},
    enabled: { type: Boolean, default: true},
    token: {type: String}
});

// Este metodo es para evitar traer algunos campos de la db:

/*
UserSchema.methods.toJSON = function() {
    //Estos son los campos que evitamos:
    const { __V, password, _id, ...user } = this.toObject();

    // esto si lo trae la db:
    user.id = _id;
    return user;
}
*/

const UserModel = mongoose.model('Users', UserSchema);
module.exports = { UserModel };