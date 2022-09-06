const mysql = require('mysql2');

const DBClient = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'xelpmoc_task_du',
    port: 3306
});

DBClient.connect(err => {
    if (err) {
        console.log(err, 'DB_Error')
    }
    console.log('Database Connected ...')
});


module.exports = DBClient;