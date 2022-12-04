const volenteerModel = require("../Models/volunteer");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "Secret_key";

const addvolunteer = async (req, res) => {
  const { contact, location, language, days } = req.body;

  try {
    const registeredvolunteer = await volenteerModel.findOne({ contact: contact }).catch((err) => {
        console.log(err);
        return err
      });
    if (registeredvolunteer) {
      return res.status(400).json({ message: "volunteer already registered" });
    }

      const result = await volenteerModel
          .create({
              contact: contact,
              location: location,
              language: language,
              days: days,
          });

    const token = jwt.sign({ email: result.contact, id: result._id }, SECRET_KEY);
    res.status(201).json({ user: result, token: token });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "!Invalid Details" });
  }
  // res.send("signup")
};
var params = function (req) {
  let q = req.url.split("?"),
    result = {};
  if (q.length >= 2) {
    q[1].split("&").forEach((item) => {
      try {
        result[item.split("=")[0]] = item.split("=")[1];
      } catch (e) {
        result[item.split("=")[0]] = "";
      }
    });
  }
  return result;
};
const volunteerlist = async (req, res) => {
    try {
           
        req.params = params(req); 
        console.log(req.params);
        const language = req.params.language
        const volunteerlist = await volenteerModel.find({ language: language });
       return res.send({
         volunteerlist,
       });
     } catch (error) {
       console.error(error.message);
       res.send("internal error ");
     }
}


module.exports = { addvolunteer, volunteerlist };

