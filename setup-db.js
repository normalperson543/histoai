import sqlite3 from "sqlite3";

const db = new sqlite3.Database("prisma/prod.db");
console.log("Created the database.");
console.log(db);