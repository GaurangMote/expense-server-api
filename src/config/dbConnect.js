const mongoose = require("mongoose");
//Gaurang777
const dbConnect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,
            {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            }
        );
        console.log(`DB Connected Successfully`);
    } catch(error){
        console.log(`Error ${error.message}`);
    }
};

module.exports = dbConnect;