const volenteerModel = require("../Models/volunteer");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "Secret_key";

const addvolunteer = async (req, res) => {
  const { contact, location, language, days } = req.body;

  try {
    const registeredvolunteer = await volenteerModel.findOne({ contact: contact });
    if (registeredvolunteer) {
      return res.status(400).json({ message: "volunteer already registered" });
    }

    const result = await volenteerModel.create({
      contact: contact,
      location: location,
        language: language,
      days: days,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
    res.status(201).json({ user: result, token: token });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "something went wrong" });
  }
  // res.send("signup")
};
const volunteerlist = async (req, res) => {
    try {
             const volunteerlist = await volenteerModel
               .find({})
              
       return res.send({
         volunteerlist,
       });
     } catch (error) {
       console.error(error.message);
       res.send("internal error ");
     }
}


module.exports = { addvolunteer, volunteerlist };
