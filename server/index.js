// MERN

// npm init -y (generamos el package.json)
// npm i express
// npm i cors
// npm i body-parser
// npm i mongoose

// npm install -g heroku
// npm i jsonwebtoken
// npm i express-validator
// npm i bcryptjs
// npm i nodemailer

// corremos la app con node ./index.js
// o podemos instalar npm i -g nodemon
// y hacemos nodemon ./index.js


// EXPRESS / CORS / BODY PARSER / MONGOOSE
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3100; // si el puerto es nulo o undefined, se selecciona el puerto 3100
const mongoose = require('mongoose');

// conectamos a MongoDB (Atlas)
const uri = "mongodb+srv://greatgames:goose5313@mydatabase.pzgx9.mongodb.net/myFirstDatabase";
mongoose.connect(uri).then((resp)=> {
    console.log("connected to DB");
});


// config routes
app.use( bodyParser.urlencoded( {extended: true }));
app.use( bodyParser.json() );
app.use( cors() );


// Schemas
const { UserModel } = require('./Schemas/UserSchema');
const { ProductModel } = require("./Schemas/ProductSchema");
const { CartModel } = require("./Schemas/CartSchema");

// const res = require('express/lib/response');

// JSON web token
const { generateJWT } = require('./utils/jwt');

// Express-validator
const { jwtValidator } = require('./middlewares/jwt.middleware');
const { check } = require('express-validator');
const { validateFields } = require('./middlewares/validateFields.middleware');

//Encriptacion de Contraseñas
const { encryptPassword, comparePasswords } = require('./utils/bcrypt');

// Automatic confirmation mail sender
//const { mailSender } = require('./utils/mailSender');
// const { application } = require('express');


//conectamos a la base de datos (local)
/*
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/DataBase');
        console.log("connected !");
    
    } catch (error) {
        console.log("error");
    }
}

connectDB();
*/

const dbConnection = async () => {

    try {
        mongoose.connect( uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        const db = mongoose.connection;

        db.on( 'error', ( error ) => {
            console.log( error );
        });

        db.once( 'open', () => {
            console.log( 'db open' );
        });

        console.log( 'db online' );
    
    } catch ( error ) {
        console.log( error );
        throw new Error( error );
    }
};

dbConnection();

//routes

/*-------------------
    CREATE PRODUCT 
--------------------*/

app.post('/api/create-product', async (req, res) => {
    try { 
        const { title, platform, description, genre, price, imageURL } = req.body;   
        const newProduct = await new ProductModel({ title, platform, description, genre, price, imageURL }).save();    
        res.send(newProduct);
    } catch ( error ) {
        res.send(error);
    }
});


/*-------------------
    GET ALL PRODUCTS 
--------------------*/

// obtenemos todos los productos
app.get('/api/products', async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.send( { data: products } );
    } catch (error) {
        res.send(error);
    }
})


/*----------------------
    ADD PRODUCT TO CART
------------------------*/

// agregamos articulos al carrito
app.post('/api/add-product-to-cart', async (req, res) => {
    try {
        const { userToken, products: [{ title, platform, description, genre, price, imageURL, quantity }] } = req.body;
        const cart = await CartModel.findOne({ userToken });
        if (cart) {
            //si existe el carrito para el usuario
            let itemIndex = cart.products.findIndex(p => p.title === title);
      
            if (itemIndex > -1) {
              //el producto existe en el carrito, actualizamos la cantidad
              let productItem = cart.products[itemIndex];
              productItem.quantity = quantity;
              cart.products[itemIndex] = productItem;
            } else {
              //el producto no exixte en el carrito, entonces lo agregamos
              cart.products.push({ title, platform, description, genre, price, imageURL, quantity });
            }
            cart = await cart.save();
            return res.status(201).send(cart);
          } else {
            //no existe carrito, entonces se crea uno
            const newCart = await new CartModel({
                userToken,
                products: [{ title, platform, description, genre, price, imageURL, quantity }]
            }).save();
      
            return res.status(202).send(newCart);
          }
        } catch (err) {
          console.log(err);
          res.status(404).send("Something went wrong");
        }
      });


/*----------------
    GET ALL CART
------------------*/

// obtenemos todos los carritos
app.get('/api/carts', async (req, res) => {
    try {
        const carts = await CartModel.find();
        res.send( { data: carts } );
    } catch (error) {
        res.send(error);
    }
})


/*----------------
    GET USER CART
------------------*/

// obtenemos el carrito del usuario
app.get('/api/user-cart', [jwtValidator], async (req, res) => {

    let token = req.header('authorization');
    token = token?.replace('Bearer ', '');
    
    try {
        const cartUser = await CartModel.findOne( {userToken: token} );   
        //const { products } = cartUser;
    
        //title,platform, description, genre, price, imageURL, quantity
        if (cartUser) {            
            res.send( {cart: cartUser.products} );        
        }
        else {
            res.send('No cart found');
        }

    } catch(error) {
        res.send(error);
    }
    
})








/*------------
    REGISTER
-------------*/

//creamos un usuario (Register):
app.post('/api/register', [
    //validamos los campos:
    check('firstName').notEmpty(),
    check('lastName').notEmpty(),   
    check('email').isEmail().notEmpty(), 
    check('password').notEmpty(),    
    validateFields 
], async (req, res) => {
    try {   
        const { firstName, lastName, email, password } = req.body;
        const hashedPassword = encryptPassword(password);               // encriptamos la contraseña
        const token = await generateJWT({firstName, lastName, email});  // generamos el token
        //await mailSender(email, token);
        console.log('token: ', token);
        const user = await new UserModel({ firstName, lastName, email, password: hashedPassword, token }).save();    
        res.send(user);
    } catch ( error ) {
        res.send(error);
    }
});




/*
app.get('/api/activate/:token', async (req, res) => {
    const { token } = req.params;
    const user = await UserModel.findOneAndUpdate({ token }, { emailIsVerified: true });
    res.send('Account activated');
})
*/


/*------------
    LOGIN
-------------*/

// sign in un usuario (Login):
app.post('/api/login', [
    check('email').notEmpty().isEmail(), 
    check('password').notEmpty(),
    validateFields
], async (req, res) => {

    try {
        // const email = req.body.email;
        // const password = req.body.password;    
        // idem a (desestructurando):    
        const { email, password } = req.body;
        
        const user = await UserModel.findOne({ email });        
        const isValid = comparePasswords(password, user.password);

        if (isValid){            
            res.status(202).send({ token: user.token, problem: null }); // obtenemos el token
    
        } else {          
            res.status(404).send({ token: null, problem: { message: 'Invalid email or password'} });
        }                

    } catch (error) {
        console.log("error", error);
    }

});



/*--------------
    USER INFO
---------------*/

//obtenemos los datos del usuario
app.get('/api/userinfo', [jwtValidator], async(req, res) => {
    let token = req.header('authorization');
    token = token?.replace('Bearer ', '');
    const user = await UserModel.findOne({ token });
    const { firstName, lastName, email} = user;
    if(user){
        res.send({firstName, lastName, email});
    }else {
        res.send('Invalid token');
    }
})



/*-----------------
    GET ALL USERS
-------------------*/

// obtenemos todos los usuarios
app.get('/api/users', async (req, res) => {
    try {
        const users = await UserModel.find();
        res.send( { data: users } );
    } catch (error) {
        res.send(error);
    }
})


/*------------------
    GET USER BY ID
-------------------*/

//obtenemos los datos del usuario por id
app.get('/api/user/:id', async (req,res) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findOne({_id: id});
        res.send({ data: user} );

    } catch(error){
        res.send(error);
    }
})



/*---------------
    DELETE USER
----------------*/

//borramos un usuario (lo inhabilitamos)
/*
app.delete('/api/user/:id', async (req,res) => {    
    try {
        const { id } = req.params;
        const deleted = await UserModel.findOneAndUpdate({_id:id}, { enabled: false});
        res.send(!!deleted);

    } catch (error) {
        res.send(error);
    }
})
*/

/*----------------
    ENABLE USER
-----------------*/

//habilitamos un usuario:
/*
app.get('/api/user/enable/:id', async (req,res) => {    
    try {
        const { id } = req.params;
        const enabled = await UserModel.findOneAndUpdate({_id:id}, { enabled: true});
        res.send(!!enabled);

    } catch (error) {
        res.send(error);
    }
})
*/



/*---------------------------
    SEND CONFIRMATION MAIL
----------------------------*/

/*
app.get('/api/send-mail', async (req, res) => {
    try {
        const sended = await mailSender();
        if(sended){
            res.send('Message sent');
        } else {
            res.send('Message NOT sent');
        }

    } catch (error) {
        res.send(error);
    }
    
})

*/



/*--------------
    TEST DEBUG
----------------*/

// para testing
app.get('/api/hola', [jwtValidator], (req, res) => {
    res.send("Salio todo ok");
});



app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});