// MERN

// npm init -y
// npm i express
// npm i cors
// npm i body-parser
// npm i mongoose

// corremos la app con node ./index.js
// o podemos instalar npm i -g nodemon
// y hacemos nodemon ./index.js


// EXPRESS / CORS / BODY PARSER / MONGOOSE
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3100; // si el puerto es nulo o undefined, se selecciona el puerto 3100
const mongoose = require('mongoose');

// config routes
app.use( bodyParser.urlencoded( {extended: false }));
app.use( bodyParser.json() );
app.use( cors() );


// Schemas
const { UserModel } = require('./schemas/User');
const res = require('express/lib/response');


//connect db
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/DataBase');
        console.log("connected !");
    
    } catch (error) {
        console.log("error");
    }
}

connectDB();


//routes

// creamos un usuario:
app.post('/api/register', async (req, res) => {
    const { email, password, age } = req.body;
    const created = await new UserModel({ email, password, age }).save();

    res.send(created);
});


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
    const users = await UserModel.find();
    res.send( { users} );
})


app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});