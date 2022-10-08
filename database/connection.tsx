// Inside file add
import { Pool } from "pg";

// DB URL should either be read from .env in development
// or set as part of production deployment (e.g. on Heroku)
if (!process.env.DATABASE_URL) {
  console.log(process.env.DATABASE_URL);
  throw new Error("Missing DATABASE_URL env var");
}
console.log(process.env.DATABASE_URL);

// Connect to the database
// and create a pool of available connections to support simultaneous requests
const db = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default db;
