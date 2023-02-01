const fs = require('fs');
const http = require('http');
const os = require('os');
const hostname = os.hostname();//'127.0.0.1';
const port = 5000;

http.get('/api/games/:id', (error) => {
    //res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.readFile('./games/' + req.params.id + '/index.html', null, (error, data) => {
        if(error) {
            res.writeHead(404);
            return res.write('File not found');
        } 
        res.write(data);
        res.end();
    });    
})


const server = http.createServer((req, res) => {
    res.statusCode  = 200;
    res.setHeader('Content-Type', 'text/plain');

    res.end(`<h1>This is Our first node server using http</h1>`); 
});

server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}/`)
})


