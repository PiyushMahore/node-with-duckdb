async function createInsertOrgTable(conn) {
    return new Promise((resolve, reject) => {
        conn.run(`
            CREATE TABLE IF NOT EXISTS orginization (orgId INTEGER, name TEXT, action TEXT, creationTime TIMESTAMP);
            DELETE FROM orginization;
            INSERT INTO orginization VALUES (1, 'OrgOne', 'created', NOW()), (2, 'OrgTwo', 'created', NOW()), (3, 'OrgThree', 'created', NOW()), (4, 'OrgFour', 'created', NOW());
    `, (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
}

async function readOrgTable(conn) {
    return new Promise((resolve, reject) => {
        conn.all("SELECT * FROM orginization;", (err, rows) => {
            if (err) return reject(err);
            console.log("ORGINIZATION")
            console.table(rows);
            resolve();
        });
    });
}

export { createInsertOrgTable, readOrgTable };