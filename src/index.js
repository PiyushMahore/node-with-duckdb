import { createInsetUserTable, readFromUserTable } from "./userTable.js";
import { createInsertOrgTable, readOrgTable } from "./orginizationTable.js";
import { createInsertClstTable, readClstTable } from "./clusterTable.js";
import connection from "./db/duckDbConnection.js";

const main = () => {
    createInsetUserTable(connection).then(() => readFromUserTable(connection));
    createInsertOrgTable(connection).then(() => readOrgTable(connection));
    createInsertClstTable(connection).then(() => readClstTable(connection));
}

main();
