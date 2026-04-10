import mysql from "mysql2/promise";

async function testDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "portfolio_bagus_batra"
    });

    console.log("✅ Database connected!");

    const [rows] = await connection.query(
      "SELECT * FROM users"
    );

    console.log("Data users:");
    console.log(rows);

    await connection.end();

  } catch (error) {
    console.error("❌ Connection failed:");
    console.error(error);
  }
}

testDatabase();