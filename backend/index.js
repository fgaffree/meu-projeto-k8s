
const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

app.get('/', (req, res) => {
  connection.query('SELECT NOW() as now', (err, results) => {
    if (err) return res.status(500).send('Erro no banco de dados');
    res.send(`Hora atual no banco: ${results[0].now}`);
  });
});

app.listen(3000, () => console.log('Backend rodando na porta 3000'));
