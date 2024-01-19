import axios from "axios";

const HonoCompoment = async () => {
  const query = { title: "this is title" };
  console.log("req_header", query);
  const response = await axios.post("http://localhost:8787/search", query);
  console.log("data:", response.data);
};
export default HonoCompoment;
