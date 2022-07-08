const mongoose = require("mongoose");
const validator = require("validator");


const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should habe more than 4 characters"],

    },
    email: {
        type: String,
        required: [true, "Please Enter Your email"],
        unique: true,
        validate: [validator.isEmail, "Please enter your email"]
    },
    phone:{
        type:Number,
        required:[true,"Please enter your mobile number"],
        length:10,
    },
    city:{
        type:String,
        require:[true,"Please Enter your City"],
    },
    purchaseOrder:[],
    shipmentDetail:[],
    
});


module.exports = mongoose.model("Customer", customerSchema)