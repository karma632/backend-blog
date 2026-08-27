require("dotenv").config();
const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client
  .connect()
  .then(async () => {
    console.log("✅ PostgreSQL connection successful");

    const result = await client.query("SELECT NOW()");
    console.log(result.rows[0]);

    await client.end();
  })
  .catch((error) => {
    console.error("❌ PostgreSQL connection failed");
    console.error(error);
  });