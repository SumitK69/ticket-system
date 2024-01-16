import axios from "axios";

const SendMail = async (data) => {
  const unique_id = data["unique_id"];
  const creation_time = data["created_at"];
  const email = data["user_id"];
  const complaint = data["complaint_text"];
  console.log("email", email);
  console.log("unique_id", unique_id);
  console.log("data", data);
  const req_header = {
    unique_id: unique_id,
    creation_time: creation_time,
    email: email,
    complaint: complaint,
  };
  console.log("req_header", req_header);
  const response = await axios.post("http://localhost:5000/api", req_header);
  console.log("data", response.data);
};
export default SendMail;
