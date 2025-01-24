const http = require('http');
const handleRequest = require('./controller/requestController');
const port = 2424;

const server = http.createServer(handleRequest);

server.listen(port, (err) => {
    if (err) {
        console.log('server in not working...');
        
    } else {
        console.log('server is working...');
        console.log('http://localhost:' + port);
    }
})