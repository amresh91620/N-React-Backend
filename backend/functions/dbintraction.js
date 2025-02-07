const con = require('./db/dbconnection'); // Import the database connection
const pool = con.connObjPgsql(); // Initialize the connection pool

// Define a function to query the database
const dbfunctions = () => {
  pool.query('SELECT * FROM users', (err, res) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    console.log("Query Results:", res.rows);
  });
};

// Export the function for external use
module.exports = dbfunctions;
