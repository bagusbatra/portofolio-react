import { Request, Response } from "express"
import { db } from "../config/db"

export const getProjects = async (
  req: Request,
  res: Response
) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM projects ORDER BY created_at DESC"
    )

    res.json(rows)

  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: "Database error",
    })
  }
}