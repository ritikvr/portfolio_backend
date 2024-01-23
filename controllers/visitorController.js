const Visitor = require("../models/visitorModel");

exports.sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      throw new Error("please provide all the fields");
    }
    const visitor = await Visitor.create({
      name: name,
      email: email,
      message: message,
    });
    if (!visitor) {
      throw new Error("Internal server error");
    } else {
      res.status(200).json({
        message: "message sent successfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
