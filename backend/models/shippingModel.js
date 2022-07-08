const mongoose = require("mongoose");


const shippingSchema = new mongoose.Schema({
    address: {
        type: String,
        required: [true, "Please Enter the Address for shipment"],
    },

    city:{
        type:String,
        required:[true,"Please enter the city for shipment"],
    },
    pincode:{
       type:Number,
       required:[true,"please enter MRP of Product"],
    },
    customerId:{
        type:String,
        required: [true, "Please Enter customer Id"],
    },
    purchaseId:{
        type:String,
        required: [true, "Please Enter customer Id"],
    }
});


module.exports = mongoose.model("Shipping", shippingSchema)
