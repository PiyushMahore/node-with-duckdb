async function createInsetUserTable(conn) {
  return new Promise((resolve, reject) => {
    conn.run(`
      CREATE TABLE IF NOT EXISTS users (id INTEGER, name TEXT, active BOOLEAN, creationDate TIMESTAMP, organizationId INTEGER);
      DELETE FROM users;
      INSERT INTO users VALUES (101, 'Alice', TRUE, NOW(), 1), (102, 'Samsung', FALSE, NOW(), 2), (103, 'Piyush', TRUE, NOW(), 3), (104, 'Alice', TRUE, NOW(), 4);
    `, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
}

async function readFromUserTable(conn) {
  return new Promise((resolve, reject) => {
    conn.all("SELECT * FROM users;", (err, rows) => {
      if (err) return reject(err);
      console.log("USERS")
      console.table(rows);
      resolve();
    });
  });
}

export { createInsetUserTable, readFromUserTable };
