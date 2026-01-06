const { Client } = require("pg");

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "collegedb",   // MUST EXIST
    password: "Rpsj123@",
    port: 5432
});

client.connect()
  .then(() => console.log("PostgreSQL Connected"))
  .catch(err => console.error("Connection Error", err));

module.exports = client;