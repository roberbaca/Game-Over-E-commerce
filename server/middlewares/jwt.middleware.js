const { UserModel }  = require("../Schemas/UserSchema");

const jwtValidator = async (req, res, next) => {
    let token = req.header('authorization');
    //console.log("El token es: ", token);
    token = token?.replace('Bearer ', '');
    const user = await UserModel.findOne({ token });
    if (user) {
        next();
    } else {
        res.send('No token found');
    }
}

module.exports = { jwtValidator } ;