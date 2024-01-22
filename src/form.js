import React, { useState } from "react";
import HonoCompoment from "./honoComponent";

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
      HonoCompoment(UserID, ComplaintText);
      alert("your complaint is submitted");
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
