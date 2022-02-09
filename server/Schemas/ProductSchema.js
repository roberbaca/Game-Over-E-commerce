const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'NewUsers' },  
    products: [
        {
            name: { type: String },
            platform: { type: String },    
            quantity: { type: Number, default: 1 },
            price: { type: Number, default: 1 },
            addedDate: { type: Date, default: new Date()},
            purchased: { type: Boolean, default: false}
        }
    ],
   
    
});


const ProductModel = mongoose.model('Product', ProductSchema);
module.exports = { ProductModel };