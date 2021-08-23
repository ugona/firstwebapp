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
    user: 'root',
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

router.post('/postEmployee', cors(), function (req, res) {
   // fetch data from front end here
  // let data = object;
    let data={name:"jindal",id:'2',email:'maheshjindalsaw',create: '2021-08-19 07:04:00'}
    connection.connect(function (err) {
        if (err) console.log(err);

        console.log('connected')
        const strQuery = 'insert into employeetable (name, id, email, create_time) values ("'+ data.name+'","'+data.id+'","'+data.email+'","'+data.create+'")';
        try {
            connection.query(strQuery, function (err, result) {
                if (err) console.log(err);
                console.log(result);
               
                res.send({
                    data: {
                        row: result.affectedRows
                    },
                    message: 'OK',
                    status: 200
                })
            })
        } catch (error) {
            console.log(error);
        }
        finally { 
           // connection.released();
         }


    });
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
               
                res.send({
                    data: {
                        name: result[0].name
                    },
                    message: 'OK',
                    status: 200
                })
            })
        } catch (error) {
            console.log(error);
        }
        finally { 
           // connection.released();
         }


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