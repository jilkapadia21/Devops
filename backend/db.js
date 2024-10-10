const mongoose = require("mongoose");
require('dotenv').config();

module.exports = async () => {
    try {
        const connectionParams = {
            // user: process.env.MONGO_USERNAME,
            // pass: process.env.MONGO_PASSWORD,
            tlsInsecure: true,
            useNewUrlParser: true,
            // useCreateIndex: true,
            useUnifiedTopology: true,
        };
        const useDBAuth = process.env.USE_DB_AUTH || false;
        if(useDBAuth){
            connectionParams.user = process.env.MONGO_USERNAME;
            connectionParams.pass = process.env.MONGO_PASSWORD;
        }
        await mongoose.connect(
           process.env.MONGODB_URI,
           connectionParams
        );
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};