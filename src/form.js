import React, { useState } from "react";
import sql from "./config/database";
import SendMail from "./sendMail";

const MyForm = () => {
  // State variables to store the content of the text areas
  const [UserID, setUserID] = useState("");
  const [ComplaintText, setComplaintText] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (UserID.trim() === "") {
      alert("Textarea is empty!");
      return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(UserID)) {
      await sql(
        `INSERT INTO complaint_table (unique_id,created_at,created_time,user_id,complaint_text) VALUES (DEFAULT,NOW(),CAST(NOW() AS timestamptz)AT TIME ZONE 'Asia/Kolkata','${UserID}','${ComplaintText}') RETURNING *`
      ).then((res) => {
        SendMail(res[0]);
        // let insertedValue = res[0]["unique_id"];
        // console.log("insertedValue", insertedValue);
      });
      // const data = {
      //   email: UserID,
      // };
      // const response = await axios.post("http://localhost:5000/api", data);
      // console.log("data", response.data);
      alert("data is inserted in table");
    } else {
      alert("enter valid email!");
    }
    setUserID("");
    setComplaintText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          User ID:
          <textarea
            value={UserID}
            onChange={(e) => setUserID(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Complaint:
          <textarea
            value={ComplaintText}
            onChange={(e) => setComplaintText(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default MyForm;
