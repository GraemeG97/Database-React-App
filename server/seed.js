import dotenv from "dotenv";
dotenv.config();

import pg from "pg";
export const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

db.query(`CREATE TABLE IF NOT EXISTS`);
