// src/utils/db.ts
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();


//comments to this code

// This module handles MySQL database connections and queries.
let connection: mysql.Connection;

// Ensure the environment variables are set for database connection
export async function connectDB() {
  if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_NAME) {
    throw new Error('❌ Missing DB environment variables.');
  }

  connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT) || 3306,
  });

  console.log('✅ Connected to MySQL DB');
  return connection;
}
// Disconnect from the database
export async function disconnectDB() {
  if (connection) {
    await connection.end();
    console.log('🔌 Disconnected from MySQL DB');
  }
}
// Query the database with a given SQL query and parameters
export async function queryDB<T = any>(query: string, params?: any[]): Promise<T[]> {
  if (!connection) {
    await connectDB();
  }
  const [rows] = await connection.execute(query, params);
  return rows as T[];
}
