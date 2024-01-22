import axios from "axios";

const HonoCompoment = async (mail, complaint) => {
  const data = { userid: mail, complaint_text: complaint };
  console.log("req_header", data);
  const response = await axios.post("http://localhost:8787/search", data);
  //   const response = await axios.post(
  //     "https://my-hono-app.sumitbk1010.workers.dev/search",
  //     query
  //   );

  console.log("data:", response);
};
export default HonoCompoment;

