const client = require("./postgreSQL");

async function runQuery() {
  try {
    //1. create Table
    await client.query(`
            CREATE TABLE IF NOT EXISTS teachers(
            id SERIAL PRIMARY KEY,
            name VARCHAR(50),
            age INT
            )
        `);
    console.log("Table created");

    //2. Insert Data
    // await client.query(`
    //     INSERT INTO teachers(name,age) VALUES('john',23),('alice',30),('bob',28)
    // `)
    // console.log("Data Inserted");

    //3. Update Data
    // await client.query(`
    //     UPDATE teachers SET name='bobby' WHERE name='bob'
    // `)
    // console.log("Data Updated");

    //4. Delete Data
    // await client.query(`
    //     DELETE FROM teachers WHERE id IN (4,5,6)
    // `)
    // console.log("Data Deleted");

    //5. Select Data
    const res = await client.query(`SELECT * FROM teachers`);
    console.log("Data Selected:", res.rows);
    
  } catch (err) {
    console.error("Query Error", err);
  } finally {
    client.end();
  }
}

runQuery();
