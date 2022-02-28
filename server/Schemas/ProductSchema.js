const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({    
        
    title: { type: String, required: true },
    platform: { type: String, required: true },
    description: { type: String, required: true },  
    genre: { type: String, required: true }, 
    price: { type: Number, default: 1, required: true },
    imageURL: { type: String, required: true } 
    
});


const ProductModel = mongoose.model('Product', ProductSchema);
module.exports = { ProductModel };

/*
const ProductSchema = new Schema({
    
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'NewUsers' },  
    products: [
        {
            name: { type: String, required: true },
            platform: { type: String, required: true },
            description: { type: String, required: true },  
            genre: { type: String, required: true },
            quantity: { type: Number, default: 1, required: true },
            price: { type: Number, default: 1, required: true },
            imageURL: { type: String, required: true } ,
            addedDate: { type: Date, default: new Date() },
            purchased: { type: Boolean, default: false }
        }
    ],   
    
});

*/