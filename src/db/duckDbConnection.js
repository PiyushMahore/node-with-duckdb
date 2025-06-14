import duckdb from "duckdb";

const db = new duckdb.Database('src/db/mydb.duckdb');
const connection = db.connect();

export default connection;