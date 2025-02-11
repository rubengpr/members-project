import pg from "pg";

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: false, // Explicitly disable SSL
});

async function testConnection() {
  try {
    await client.connect();
    console.log("✅ Connected to PostgreSQL!");
    const res = await client.query("SELECT NOW();");
    console.log("Current Timestamp:", res.rows[0]);
  } catch (err) {
    console.error("❌ Database connection error:", err);
  } finally {
    await client.end();
  }
}

testConnection();
