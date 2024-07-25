const express = require("express");
const router = new express.Router();
const {
  addProperty,
  getAllProperty,
  editPropertys,
  deletePropertys,
  getSelectedProperty,
} = require("../controllers/property");
//Add property
router.post("/addproperty", addProperty);
//Get all property
router.get("/getallproperties", getAllProperty);
//Get Selected property
router.get("/getselectedproperty/:propertyid", getSelectedProperty);
//Edit property
router.put("/editproperty/:propertyid", editPropertys);
//Delete property
router.delete("/deleteproperty/:propertyid", deletePropertys);
module.exports = router;
