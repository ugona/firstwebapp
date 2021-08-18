var http = require('http');
const port = 8000;
const express = require('express')
const app = express();
const router = express.Router();
const cors = require('cors')
app.use(cors);
router.get('/', cors(), function (req, res) {
    res.send({
        data: {
            message: 'OK',
            status: 200
        }
    })
})

router.get('/getEmployee', function (req, res) {
    res.send({
        data: {
            name: 'Umamahesh'
        },
        message: 'OK',
        status: 200
    })
})

app.use(router);
app.listen(process.env.port | port)
console.log('Server Running at Port - ' + process.env.port | port);
// const server = http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// });

// server.listen(port, 'localhost', () => {
//     console.log('Server Running at Port - ' + port);
// });