const mongoose = require("mongoose");


const purchaseSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, "Please Enter product's name"],
    },
    quantity:{
        type:Number,
        required:[true,"Please enter quantity of Product"],
    },
    pricing:{
        type:Number,
        required:[true,"please enter Pricing"],
    },
    mrp:{
       type:Number,
       required:[true,"please enter MRP of Product"],
    },
    customerId:{
        type:String,
        required: [true, "Please Enter customer Id"],
    }
    
});


module.exports = mongoose.model("Purchase", purchaseSchema)
