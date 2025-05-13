
const apidates = require("../models/apidates");


// get api
const HandlerGetapidata =  async (req, res) => {
  try {
    const data = await apidates.find();
    return res.status(200).json({
      status: true,
      message: "data found successs",
      Data: data,
    });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
}

// login api
const  HandlerLogin = async (req, res) => {
  try {
    const { email, password } = req.fields; // not req.body
    if (!email || !password) {
      return res.status(400).json({
        status: false,
        message: "Please provide all fields",
      });
    }
    const data = await apidates.findOne({ email, password });
    if (!data) {
      return res.status(400).json({
        status: false,
        message: "Invalid email or password",
      });
    }
    return res.status(200).json({
      status: true,
      message: "Data found successfully",
      Data: data,
    });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
}


// post api
const HandlerPostapidata = async (req, res) => {
  try {
    const { name, email, password } = req.fields; // not req.body

    if (!name || !email || !password) {
      return res.status(400).json({
        status: false,
        message: "Please provide all fields",
      });
    }

    const data = await apidates.create({ name, email, password });

    return res.status(200).json({
      status: true,
      message: "Data created successfully",
      Data: data,
    });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
}


// delete api
const HandlerDeleteapidata = async (req, res) => {
  try {
    const { id } = req.fields; // not req.body

    if (!id) {
      return res.status(400).json({
        status: false,
        message: "Please provide all fields",
      });
    }
    const data = await apidates.findByIdAndDelete(id);
    return res.status(200).json({
      status: true,
      message: "Data deleted successfully",
      Data: data,
    });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }

}

// single data get api
const HandlerSingleData = async (req, res) => {
  try {
    const { id } = req.fields; // not req.body
    if (!id) {
      return res.status(400).json({
        status: false,
        message: "Please provide all fields",
      });
    }
    const data = await apidates.findById(id);
    return res.status(200).json({
      status: true,
      message: "Data found successfully",
      Data: data,
    });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
}

// update api
    const HandlerUpdateapidata = async (req, res) => {
  try {
    const { id, name, email, password } = req.fields; // not req.body
    if (!id || !name || !email || !password) {
      return res.status(400).json({
        status: false,
        message: "Please provide all fields",
      });
    }
    const data = await apidates.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true }
    );
    return res.status(200).json({
      status: true,
      message: "Data updated successfully",
      Data: data,
    });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
}


module.exports = {
  HandlerGetapidata,
  HandlerLogin,
  HandlerPostapidata,
  HandlerDeleteapidata,
  HandlerSingleData,
  HandlerUpdateapidata
};