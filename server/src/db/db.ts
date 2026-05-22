import mongoose from "mongoose";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("DATABASE_URL not provided");
}

async function main() {
  try {
    await mongoose.connect(DATABASE_URL!);
    console.log("Database Connected");
  } catch (err) {
    console.error("Error connecting to DB:", err);
    process.exit(1);
  }
}

main();