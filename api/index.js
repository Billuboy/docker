const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

const opts = {
  user: process.env.MYSQL_USER,
  host: process.env.MYSQL_HOST,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

const pool = mysql.createPool(opts);

const query = sql =>
  new Promise((resolve, reject) => {
    pool.getConnection((errConn, connection) => {
      if (errConn) {
        console.log(errConn);
        reject(errConn);
      }

      connection.query(sql, (err, rows) => {
        if (err) {
          console.log(err);
          reject(err);
        }

        resolve(JSON.parse(JSON.stringify(rows)));
        connection.release();
      });
    });
  });

app.get('/', async (req, res) => {
  const sql = `SELECT * FROM test;`;
  const data = await query(sql);
  return res.json(data);
});

app.get('/test/', async (req, res) => {
  return res.send('Hello from server');
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Listening on port ${process.env.API_LOCAL_PORT}`);
});
