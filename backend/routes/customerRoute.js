const express= require("express");
const { registerCustomer, purchaseOrder,shipment, getShipmentWithCity, getCustomerWithAllPurchaseOrder, getCustomerWithAllPurchaseOrderAndShipmentDetails } = require("../controllers/customerController");
const router=express.Router();

router.route("/register").post(registerCustomer);
router.route("/purchase/new").post(purchaseOrder);
router.route("/shipping/new").post(shipment);
router.route("/shipping/get").get(getShipmentWithCity);

router.route("/customer/purchase").get(getCustomerWithAllPurchaseOrder);
router.route("/customer/purchaseandshipment").get(getCustomerWithAllPurchaseOrderAndShipmentDetails);



module.exports=router;