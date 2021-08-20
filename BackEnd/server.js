var http = require('http');
const port = 8000;
const express = require('express')
const app = express();
const router = express.Router();
const cors = require('cors')
const mysql = require('mysql');
//app.use(cors);

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'mahesh',
    password: '21041992.a',
    database: 'testdb'
})
router.get('/', cors(), function (req, res) {
    res.send({
        data: {
            message: 'OK',
            status: 200
        }
    })
})

router.get('/getEmployee', cors(), function (req, res) {
    res.send({
        data: {
            name: 'Umamahesh ...'
        },
        message: 'OK',
        status: 200
    })
})
router.get('/getEmployeeFromDB', cors(), function (req, res) {
    // call DB query here to fetch name from table 
    connection.connect(function (err) {
        if (err) console.log(err);

        console.log('connected')
        const strQuery = 'SELECT * FROM employeetable';
        try {
            connection.query(strQuery, function (err, result) {
                if (err) console.log(err);
                console.log(result);

                let db = { name: 'test name' }
                res.send({
                    data: {
                        name: db.name
                    },
                    message: 'OK',
                    status: 200
                })
            })
        } catch (error) {
            console.log(error);
        }
        finally { connection.destroy(); }


    });

})

app.use(router);
app.use(cors);
app.listen(process.env.port | port)
console.log('Server Running at Port - ' + process.env.port | port);
// const server = http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// });

// server.listen(port, 'localhost', () => {
//     console.log('Server Running at Port - ' + port);
// });