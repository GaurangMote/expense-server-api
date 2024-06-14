const expressAyncHandler = require('express-async-handler');
const User = require("../../model/User");

//Register
const registerUser = expressAyncHandler(async (req, res)=> {
    const{email,firstname,lastname,password} = req?.body;

    const userExists = await User.findOne({email});
    if(userExists) throw new Error("User already exists");
    
    try{//If user already registered
        const user = await User.create({email,firstname,lastname,password});
        res.status(200).json(user);
    }catch(error){
        res.json(error);
    }
});

//Fetch Users

const fetchUsersCtrl = expressAyncHandler( async (req, res) => {
    try{
        const users = await User.find({});
        res.json(users);
    }
    catch(error){
        res.json(error);
    }
});

module.exports = {registerUser, fetchUsersCtrl};