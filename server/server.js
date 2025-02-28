const path = require('path');
const express = require('express');
const app = express();
// const mysql = require("mysql2");
const connection = require('./app/models/Record')

app.set('port', 3000);
app.listen(app.get('port'), () => {
    // console.log('Сервер успешно запущен на порту ' + app.get('port') + ' и подключена база данных ' + connection.config.database)
})

app.use('/api/records', require('./routes/records'));
app.use('/', express.static(path.join(__dirname, '../dist')));