const http = require('http');
const handleRequest = require('./controller/requestController');

const port = 2224;

const server = http.createServer(handleRequest);

server.listen(port, (err) => {
    if (err) {
        console.log("Server Is Not Working...");
    } else {
        console.log("Server Is Working...");
        console.log("http://localhost:" + port);
    }
})