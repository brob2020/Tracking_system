import InsertData from "../../modele/insertData";
import dbConnect from "../../utils/dbConnect";
import Joi from "joi";
import nodemailer from "nodemailer";
dbConnect();

function sendValidation(data) {
  const schema = Joi.object({
    Account: Joi.string().required(),
    Type: Joi.string().required(),
    Name: Joi.string().required(),
    User_Name: Joi.string().required(),
    Serial_Number: Joi.string().required(),
    PhoneNumber: Joi.string().required(),
    Address: Joi.string().required(),
    Description: Joi.string().required(),
  });
  return schema.validate(data);
}

export default async (req, res) => {
  /*const {
    Account,
    Serial_Number,
    Name,
    Description,
    Address,
    PhoneNumber,
    User_Name,
    Type,
    Incident,
    status,
    Notification,
  } = req.body;*/
  const { method, body } = req;
  if (method === "GET") {
    try {
      const files = await InsertData.find({});
      res.status(200).json({ success: true, data: files });
    } catch (err) {
      res.status(400).json({ success: false, error: err });
    }
  } else if (method === "POST") {
    //joi validation
    console.log("joi start ");
    console.log("body is here ");

    //const { error } = sendValidation(body);

    //console.log(error);

    //console.log(body);
    /* if (error)
      return res
        .status(400)
        .json({ success: false, error: error.details[0].message });
    const file = new InsertData(body);
    console.log(InsertData);*/
    const file = new InsertData(body);
    try {
      console.log(body.Incident);
      const newFile = await file.save();
      //console.log(file);
      res.status(200).json({ success: true, data: newFile });

      //// sending data by email

      //setup the transport for the email

      /*const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          type: "login",

          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
      const emailRes = await transporter.sendMail({
        from: `${User_Name}`,
        to: "brobr6394@gmail.com",
        subject: ` ${Type} Ticket request for ${Account} from ${User_Name}`,
        html: `<p>Please process with this ticket </p><br>
       <p><strong> customer  Name: </strong> ${Name} </p><br>
       <p><strong> customer  Incident: </strong> ${Incident} </p><br>
       <p><strong> customer Phone: </strong> ${PhoneNumber} </p><br>
       <p><strong> customer Address: </strong> ${Address} </p><br>
       <p><strong> customer Serial Number : </strong> ${Serial_Number} </p><br>
       <p><strong> please remember to update when done with it. Thanks </p><br>

       <p><strong> Request : </strong> ${Description} </p><br>
       <p><strong> Mail : </strong> ${User_Name} </p><br>
       `,
      });*/
      console.log("message send ");
    } catch (e) {
      console.log(e);
      res.status(400).json({ success: false });
    }
  } else if (method === "PUT") {
    try {
      const updatedData = await InsertData.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json({ success: true, data: updatedData });
    } catch (err) {
      res.status(400).json({ success: false, error: err });
    }
  }
};
