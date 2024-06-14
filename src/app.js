const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const { registerUser } = require("./controllers/users/usersCtrl");
const userRoute = require("./routes/users/usersRoute");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");
const app = express();

dotenv.config();
//dbConnect
dbConnect(); 

app.use(express.json());
//routes
app.use('/api/users',userRoute);

//error
app.use(notFound);
app.use(errorHandler);


module.exports = app;