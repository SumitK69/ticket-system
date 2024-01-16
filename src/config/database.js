import { neon } from "@neondatabase/serverless";
// // TODO: change this
const sql = neon(process.env.REACT_APP_LINK);

export default sql;
