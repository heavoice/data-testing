// test.ts
import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://postgres:foxajawew123@db.fyuyisbbwcbtkoivezyc.supabase.co:5432/",
});

client
  .connect()
  .then(() => {
    console.log("Connected");
    return client.end();
  })
  .catch((err) => {
    console.error("Connection error", err);
  });
