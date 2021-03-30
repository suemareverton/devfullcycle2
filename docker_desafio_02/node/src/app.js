'use strict';

const express = require('express');

// Constants
const HOST = '0.0.0.0';
const PORT = 3000;

// MySQL
const mysql = require('mysql')

const mysql_config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database:'desafio02db'
};

const firstNames = ['João', 'José', 'Maria'];
const lastNames =  ['Santos', 'Silva', 'Souza'];

// App
const app = express();
app.get('/', async (req, res) => {

  // Getting random name
  var firstNameToInsert = firstNames[Math.floor(Math.random()*firstNames.length)];
  var lastNameToInsert  = lastNames[Math.floor(Math.random()*lastNames.length)];

  // Inserting name into database
  await insertData(mysql_config, firstNameToInsert, lastNameToInsert);

  // Reading names from database
  var data = await readData(mysql_config);

  // Html Output
  var html = '<h1>Full Cycle Rocks!</h1>';
  html = html.concat('<h2>Pessoas cadastradas:</h2>');
  html = html.concat('<ul>');
  
  Object.keys(data).forEach(function(key) {
    var row = data[key];
    html = html.concat('<li>').concat(row.FirstName + ' ' + row.LastName).concat('</li>');
  });
  
  html = html.concat('</ul>');
  res.send(html);
});

function insertData(mysql_config, firstName, lastName) {
  return new Promise(resolve => {

    const con = mysql.createConnection(mysql_config);

    con.connect(function(err) {
      if (err) throw err;
      console.log('Connected to MySQL!');

      var insert_query = 'INSERT INTO People(FirstName, LastName) VALUES(?, ?);';
      con.query(insert_query, [firstName, lastName], function (err, rows) {
        if (err) throw err;
        resolve(rows.insertId);
      });
    });
        
  });
}

function readData(mysql_config) {
  return new Promise(resolve => {
    
    const con = mysql.createConnection(mysql_config);
    
    con.connect(function(err) {
      if (err) throw err;
      console.log('Connected to MySQL!');

      con.query('SELECT FirstName, LastName FROM People', function (err, result, fields) {
        if (err) throw err;
        resolve(result);
      });
    });
  });
}

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);