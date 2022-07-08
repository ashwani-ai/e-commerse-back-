const { find } = require("../models/customerModel");
const Customer = require("../models/customerModel");
const Purchase= require("../models/purchaseModel");
const Shipping = require("../models/shippingModel");

//1.CREATING CUSTOMER DETAILS
exports.registerCustomer = async (req, res) => {

    const { name, email,phone,city} = req.body;
    const customer = await Customer.create({
        name,
        email,
        phone,
        city,
    });
    res.status(200).json({
        success:true,
        customer
    });
}
//2. CREATING PURCHASE ORDER
exports.purchaseOrder=async(req,res)=>{
    const {productName,quantity,pricing,mrp,customerId}=req.body;
    if(pricing>mrp){
        res.status(200).json({
            success:false,
            error:"pricing should be less than mrp"
        })
        return;
    }
    const purchase = await Purchase.create({
        productName,
        quantity,
        pricing,
        mrp,
        customerId
    });

    res.status(200).json({
        success:true,
        purchase
    })
}
//3. CREATING SHIPPING DETAILS
exports.shipment=async(req,res)=>{
    const {address,city,pincode,customerId,purchaseId}=req.body;
    const shipping = await Shipping.create({
        address,
        city,
        pincode,
        customerId,
        purchaseId,
    });
    res.status(200).json({
        success:true,
        shipping
    })
}
//4.GET CUSTOMER WHICH HAVE SHIPMENT WITH CITY FILTER
exports.getShipmentWithCity=async(req,res)=>{
    
    let shipping1 = await Shipping.find();
    let shipping = await Shipping.find({city:req.query.city});
    let customer=await Customer.find();
    let customer1=await Customer.find();
let len=shipping1.length;

let len1=customer.length;
console.log(len,len1)

for(let i=0;i<len1;i++){
    let sum=0;
    for(let j=0;j<len;j++){
        if(customer[i]._id==shipping1[j].customerId){
            sum+=1;
        }
    }
    if(sum===0){
        customer.splice(i,1);
    }
}
len=shipping.length;
for(let i=0;i<len1;i++){
    let sum=0;
    for(let j=0;j<len;j++){
        if(customer1[i]._id==shipping[j].customerId){
            sum+=1;
        }
    }
    if(sum===0){
        customer1.splice(i,1);
    }
}

if(req.query.city){
    res.status(200).json({
        success:true,
        // shipping,
        customer1
    })
}else{
    res.status(200).json({
        success:true,
        customer
    })
}

}
//5.GET CUSTOMER WITH ALL PURCHASE ORDER
exports.getCustomerWithAllPurchaseOrder=async(req,res)=>{
    
    let purchase= await Purchase.find();
    let customer=await Customer.find();

let len=purchase.length;

let len1=customer.length;
console.log(len,len1)

for(let i=0;i<len1;i++){

    for(let j=0;j<len;j++){
        if(customer[i]._id==purchase[j].customerId){
            customer[i].purchaseOrder.push(purchase[j]);
            console.log(customer[i].purchaseOrder[j]);
        }
    }
}


    res.status(200).json({
        success:true,
        customer
    })
    


}
//6. GET CUSTOMER WITH ALL PURCHASE ORDER AND SHIPMENT DETAILS
exports.getCustomerWithAllPurchaseOrderAndShipmentDetails=async(req,res)=>{
    
    let purchase= await Purchase.find();
    let customer=await Customer.find();
    let shipping=await Shipping.find();

let len=purchase.length;

let len1=customer.length;

console.log(len,len1)

for(let i=0;i<len1;i++){

    for(let j=0;j<len;j++){
        if(customer[i]._id==purchase[j].customerId){
            customer[i].purchaseOrder.push(purchase[j]);
            console.log(customer[i].purchaseOrder[j]);
        }
    }
}
let len2=shipping.length;
for(let i=0;i<len1;i++){

    for(let j=0;j<len2;j++){
        if(customer[i]._id==shipping[j].customerId){
            customer[i].shipmentDetail.push(shipping[j]);
            console.log(customer[i].shipmentDetail[j]);
        }
    }
}

    res.status(200).json({
        success:true,
        customer
    })
    


}
