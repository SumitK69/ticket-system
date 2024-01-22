import React from "react";
import MyForm from "./form";
function App() {
  return (
    <div className="App">
      <MyForm />
      <a href="mailto:email@example.com?cc=secondemail@example.com, anotheremail@example.com, &bcc=lastemail@example.com&subject=Mail from our Website&body=Some body text here">
        Send Email
      </a>
    </div>
  );
}

export default App;
