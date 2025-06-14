async function createInsertClstTable(conn) {
    return new Promise((resolve, reject) => {
        conn.run(`
            CREATE TABLE IF NOT EXISTS cluster (clusterName TEXT, action TEXT, creationTime TIMESTAMP, organizationId INTEGER);
            DELETE FROM cluster;
            INSERT INTO cluster VALUES  ('ClusterA', 'start', NOW(), 1), ('ClusterB', 'Stop', NOW(), 2), ('ClusterC', 'Running', NOW(), 3);
    `, (err) => {
            if (err) return reject(err);
            resolve();
        });
    });
}

async function readClstTable(conn) {
    return new Promise((resolve, reject) => {
        conn.all("SELECT * FROM cluster;", (err, rows) => {
            if (err) return reject(err);
            console.log("CLUSTER")
            console.table(rows);
            resolve();
        });
    });
}

export { createInsertClstTable, readClstTable };