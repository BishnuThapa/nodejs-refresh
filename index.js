const http = require('http');
// const fs = require('fs');

// const myServer = http.createServer((req, res) => {
//     // const log = `${Date.now()}: New request received \n`;
//     const log = `${Date.now()}: ${req.url} New request received \n`;
//     fs.appendFile('log.txt',log, (err, data) => {
//         res.end("Hello From Server");
//     })
// });

// myServer.listen(8000, () => console.log('Server is listening on port 8000'));


const express = require('express');
const app = express();


app.get('/', (req, res) => {
    return res.send('Hello from Home Page');
});

app.get('/about', (req, res) => {
    return res.send('Hello from About Page');
});
// const myServer = http.createServer(app);
// myServer.listen(8000, () => console.log("Server is listening on port 8000"));

app.listen(8000, () => console.log("Server is listening on port 8000"));

