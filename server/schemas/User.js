const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: [true, "email required"], unique: true } ,
    password: { type: String, required: [true, "password required"] },
    age: { type: Number, default: 18 },
    createdDate: { type: Date, default: new Date()}
});

// Este metodo es para evitar traer algunos campos de la db:
UserSchema.methods.toJSON = function() {
    //Estos son los campos que evitamos:
    const { __V, password, _id, ...user } = this.toObject();

    // esto si lo trae la db:
    user.id = _id;
    return user;
}



const UserModel = mongoose.model('Users', UserSchema);

module.exports = { UserModel };