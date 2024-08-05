import express from "express";
import { Pool } from "pg";

const app = express();
const port = process.env.PORT || 3000;

// PostgreSQL connection
const pool = new Pool({
  user: "your_username",
  host: "localhost",
  database: "your_database",
  password: "your_password",
  port: 5432,
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Example route to get data from PostgreSQL
app.get("/data", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM your_table");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
