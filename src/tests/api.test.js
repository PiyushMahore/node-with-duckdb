import conn from "../db/duckDbConnection.js"
import { createInsetUserTable, readFromUserTable } from "../userTable.js";
import { createInsertOrgTable, readOrgTable } from "../orginizationTable.js";
import { createInsertClstTable, readClstTable } from "../clusterTable.js"

test('should createInsert to the user table', async () => {
    await expect(createInsetUserTable(conn)).resolves.toBe('user created');
});

test('should read user', async () => {
    await expect(readFromUserTable(conn)).resolves.toBe('User fetched successfully');
})

test('should createInsert to the org table', async () => {
    await expect(createInsertOrgTable(conn)).resolves.toBe("orginization created");
});

test('should read org', async () => {
    await expect(readOrgTable(conn)).resolves.toBe("orginization fetched successfully");
});

test('should createInsert to the clst table', async () => {
    await expect(createInsertClstTable(conn)).resolves.toBe("cluster created");
});

test('should read clst', async () => {
    await expect(readClstTable(conn)).resolves.toBe("cluster fetched successfully");
});