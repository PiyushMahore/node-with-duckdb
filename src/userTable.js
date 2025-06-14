async function createInsetUserTable(conn) {
  return new Promise((resolve, reject) => {
    try {
      conn.run(`
        CREATE TABLE IF NOT EXISTS users (id INTEGER, name TEXT, active BOOLEAN, creationDate TIMESTAMP, organizationId INTEGER);
        DELETE FROM users;
        INSERT INTO users VALUES (101, 'Alice', TRUE, NOW(), 1), (102, 'Samsung', FALSE, NOW(), 2), (103, 'Piyush', TRUE, NOW(), 3), (104, 'Alice', TRUE, NOW(), 4);
      `, (err) => {
        if (err) return reject("error");
        resolve("user created");
      });
    } catch (error) {
      reject(error);
    }
  });
}

async function readFromUserTable(conn) {
  return new Promise((resolve, reject) => {
    try {
      conn.all("SELECT * FROM users;", (err, rows) => {
        if (err) return reject("error");
        console.table(rows);
        resolve("User fetched successfully");
      });
    } catch (error) {
      reject("error");
    }
  });
}

export { createInsetUserTable, readFromUserTable };
