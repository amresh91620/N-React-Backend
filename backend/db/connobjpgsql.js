const { Pool } = require("pg");

function connObjPgsql() {
    return new Pool({
        user: "postgres",
        host: "localhost",
        database: "MyDB",
        password: "91620",
        port: 5432,
        max: 100,
    });
}

module.exports = { connObjPgsql };
