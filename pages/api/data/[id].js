import InsertData from "../../../modele/insertData";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  const {
    method,
    query: { id },
    body,
  } = req;

  switch (method) {
    case "GET":
      {
        try {
          const insertData = await InsertData.findById(id);
          res.status(200).json({ success: true, data: insertData });
        } catch (err) {
          res.status(400).json({ success: false, error: err });
        }
      }
      break;
    case "PUT":
      {
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
      break;
    case "DELETE":
      {
        try {
          const deletedData = await InsertData.deleteOne({ _id: id });
          if (!deletedData) {
            res.status(400).json({ success: false });
          }
          res.status(200).json({ success: true, data: {} });
        } catch (err) {
          res.status(400).json({ success: false, error: err });
        }
      }
      break;
    default:
      res.status(405).json({ success: false, error: "Not allowed" });
      break;
  }
};
