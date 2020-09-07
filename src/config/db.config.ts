import mysql  from "mysql"
import dotenv from 'dotenv'
dotenv.config()

const dbConntion = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

dbConntion.connect((err:any) => {
  if (err) throw err;
  // tslint:disable-next-line:no-console
  console.log("Database Connected!")
});

export default dbConntion