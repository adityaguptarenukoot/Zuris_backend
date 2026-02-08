// import pkg from "pg";
// import 'dotenv/config';
import { neon } from "@neondatabase/serverless";

// const { Pool } = pkg;

// const pool = new Pool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT,
//   ssl: {
//     rejectUnauthorized: false, 
//   },
// });

// export default pool;

const sql = neon(process.env.NEON_DB_URL);

export default sql;
