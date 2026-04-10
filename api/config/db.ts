import mysql from "mysql2/promise"
import dotenv from "dotenv"

dotenv.config()

// Pool connection (lebih stabil untuk production)
export const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "portofolio_bagus_batra",

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

// Optional: test connection saat server start
export const testConnection = async () => {
  try {
    const connection = await db.getConnection()
    console.log("✅ Database connected!")
    connection.release()
  } catch (error) {
    console.error("❌ Database connection failed:")
    console.error(error)
  }
}