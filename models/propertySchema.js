// Import necessary modules

const mongoose = require("mongoose");

// Mongoose itemSchema
const propertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  propertyType: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  poster: {
    type: Array,
  },
});

const Property = new mongoose.model("Property ", propertySchema);
module.exports = Property;
