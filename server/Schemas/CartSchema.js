/*Este Schema contiene los items del carrito de compras para cada usuario*/

const mongoose = require('mongoose');
const { Schema } = mongoose;

const CartSchema = new Schema({           
    
    userToken: { type: String, required: true },
    products: [
        {
            title: { type: String, required: true },
            platform: { type: String, required: true  },
            description: { type: String, required: true  },  
            genre: { type: String, required: true  }, 
            price: { type: Number, required: true  },
            imageURL: { type: String, required: true  },
            quantity: { type: Number, required: true }
        }   
    ],

    active: { type: Boolean, default: true },
    addedOn: { type: Date, default: Date.now }
});


const CartModel = mongoose.model('Cart', CartSchema);
module.exports = { CartModel };
