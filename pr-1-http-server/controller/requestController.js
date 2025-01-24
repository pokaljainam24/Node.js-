const fs = require('fs');

const handleRequest = (req, res) => {
    let filename = '';

    if (req.url === '/') {
        filename = './index.html';
    } else if (req.url === '/about') {
        filename = './about.html';
    } else if (req.url === '/contact') {
        filename = './contact.html';
    } else if (req.url === '/blog') {
        filename = './blog.html';
    } else {
        filename = './error.html';
    }

    fs.readFile(filename, (err, result) => {
        if (!err) {
            res.end(result);
        }
    })
}

module.exports = handleRequest;