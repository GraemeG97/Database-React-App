import express from "express";
const app = express();
app.use(express.json);

//cors
import cors from "cors";
app.use(cors());

//dotenv
import dotenv from "dotenv";
dotenv.config();

//pg set up
import pg from "pg";
export const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

//PORT
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});

app.get("/", (request, response) => {
  response.send("Root Route: where it all begins");
});

//to read
app.get();

//to add
app.post();

//to update
app.put();

//to delete
app.delete();
