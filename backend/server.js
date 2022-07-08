const { Console } = require("console");
const app = require("./app");
const connectDatabase= require("./config/database")
const cors = require("cors")
const dotenv=require("dotenv");


//handling uncaught exception


//config
dotenv.config({path:"backend/config/config.env"});


connectDatabase();

const server =app.listen(process.env.PORT,()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`)
}) 

