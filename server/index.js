// MERN

// npm init -y (generamos el package.json)
// npm i express
// npm i cors
// npm i body-parser
// npm i mongoose

// npm install -g heroku
// npm i jsonwebtoken
// npm i express-validator

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
const res = require('express/lib/response');

// JSON web token
const { generateJWT } = require('./utils/jwt');
const { jwtValidator } = require('./middlewares/jwt.middleware');




//connect db local
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/DataBase');
        console.log("connected !");
    
    } catch (error) {
        console.log("error");
    }
}

//connectDB();


//routes

// creamos un usuario (Register):
app.post('/api/register', async (req, res) => {
    try {   
        const { firstName, lastName, age, email, password } = req.body;
        const token = await generateJWT({firstName, lastName, email});
        //console.log('token: ', token);
        const created = await new UserModel({ firstName, lastName, age, email, password, token }).save();    
        res.send(created);
    } catch ( error ) {
        res.send(error);
    }
});


// sign in un usuario (Login):
app.post('/api/login', (req, res) => {

    try {
        // const email = req.body.email;
        // const password = req.body.password;    
        // idem a (desestructurando):    
        const { email, password } = req.body;
    
        if (email === "admin@admin.com" && password === "pass12345") {
            const token = "sd-adasfdhjsfgosdhgodfg";
            res.send({ data: { token }, problem: null });
        } else {
            res.send({ data: null, problem: { message: "incorrect email or password"} });
        }

    } catch (error) {
        console.log("error", error);
    }

});


// obtenemos todos los usuarios
app.get('/api/users', async (req, res) => {
    try {
        const users = await UserModel.find();
        res.send( { data: users } );
    } catch (error) {
        res.send(error);
    }
})


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


//borramos un usuario (lo inhabilitamos)
app.delete('/api/user/:id', async (req,res) => {    
    try {
        const { id } = req.params;
        const deleted = await UserModel.findOneAndUpdate({_id:id}, { enabled: false});
        res.send(!!deleted);

    } catch (error) {
        res.send(error);
    }
})


//habilitamos un usuario:
app.get('/api/user/enable/:id', async (req,res) => {    
    try {
        const { id } = req.params;
        const enabled = await UserModel.findOneAndUpdate({_id:id}, { enabled: true});
        res.send(!!enabled);

    } catch (error) {
        res.send(error);
    }
})


app.get('/api/hola', [jwtValidator], (req, res) => {
    res.send("Salio todo ok");
});



app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});