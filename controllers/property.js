const Property = require("../models/propertySchema");

//Add Property

async function addProperty(req, res) {
  const {
    name,
    propertyType,
    location,
    price,
    age,
    description,
    Status,
    mobile,
    poster,
  } = req.body;
  console.log(req.body);
  if (
    !name ||
    !propertyType ||
    !location ||
    !price ||
    !age ||
    !description ||
    !Status ||
    !mobile
  ) {
    return res.status(422).json({ error: "fill all the details" });
  }
  try {
    const preproperty = await Property.findOne({ name: name });

    if (preproperty) {
      return res.status(422).json({ error: "This property is Already Exist" });
    } else {
      const newProperty = new Property({
        name,
        propertyType,
        location,
        price,
        age,
        description,
        Status,
        mobile,
        poster,
      });

      const savedProperty = await newProperty.save();
      return res.status(201).json({ status: 201, savedProperty });
    }
  } catch (error) {
    console.log("catch block error", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
}

//Get all Propertys

async function getAllProperty(req, res) {
  try {
    const allPropertys = await Property.find();
    res.status(201).json({ status: 201, allPropertys });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
  }
}

//Get selected property

async function getSelectedProperty(req, res) {
  const propertyId = req.params.propertyid;
  try {
    const selectedPropertys = await Property.find({ _id: propertyId });
    res.status(201).json({ status: 201, selectedPropertys });
  } catch (error) {
    res.status(422).json(error);
    console.log("catch block error");
  }
}

//Eddit property

async function editPropertys(req, res) {
  const propertyId = req.params.propertyid;
  console.log(propertyId);
  const {
    name,
    propertyType,
    location,
    price,
    age,
    description,
    Status,
    mobile,
    poster,
  } = req.body;

  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      propertyId,
      {
        $set: {
          name,
          propertyType,
          location,
          price,
          age,
          description,
          Status,
          mobile,
          poster,
        },
      },
      { new: true }
    );

    if (!updatedProperty) {
      return res.status(404).json({ error: "Property not found" });
    }

    res.status(200).json({ status: 200, updatedProperty });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

//Delete property

async function deletePropertys(req, res) {
  const propertyId = req.params.propertyid;

  try {
    const deletedProperty = await Property.findByIdAndDelete(propertyId);

    if (!deletedProperty) {
      return res.status(404).json({ error: "Property not found" });
    }

    res.status(200).json({ status: 200, deletedProperty });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  addProperty,
  getAllProperty,
  editPropertys,
  deletePropertys,
  getSelectedProperty,
};
