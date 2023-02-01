const express = require('express');
const fs = require('fs');
const app = express();
//const http = require('http');

app.get('/api/games/:id', (req, res) => {
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

app.get('/api/write/:id', (req, res) => {
    fs.appendFile('./games/' + req.params.id + '.txt', 'Hello world!', (error) => {
        if(error) throw error;
        //console.log('File Saved');
        res.send('File saved')
    })
})

//append to file
app.get('/api/append', (req, res) => {
    fs.appendFile('./games/demoCreateFile.txt', 'Append file!', (error) => {
        if(error) throw error;
        res.send('File saved')
    })
})

//write to file
app.get('/api/write', (req, res) => {
    fs.writeFile('./games/demoCreateFile.txt', 'Hello Context!', (error) => {
        if(error) throw error;
        res.send('Saved')
    })
})
//open file
app.get('/api/open', (req, res) => {
    fs.open('./games/demoCreateFile.txt', 'w', (error) => {
        if(error) throw error;
        res.send('File Opened')
    })
})


app.get('/api/delete', (req, res) => {
    fs.unlink('./games/demoCreateFile.txt', (error) => {
        if(error) throw error;
        res.send('File Deleted');
    })
})

app.get('/api/rename', (req, res) => {
    fs.rename('./games/hello.txt', './games/demoCreateFile.txt', (error) => {
        if(error) throw error;
        res.send('File Renamed');
    })
})

app.get('/api/games', (req,res) => {
    fs.readFile('./games/youtube-donloder/index.html', null, (error, data) => {
        if(error) {
            res.writeHead(404);
            return res.write('Oops! File not found!');
        } 
        res.write(data);
        res.end();
    }); 
})

app.listen(5002, (req, res) => {
    console.log('listening on port 5002');
})

/*
let handlerequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type' : 'text/html'
    })

    fs.readFile('./games/youtube-donloder/index.html', null, (error, data) => {
        if(error) {
            res.writeHead(404);
            return res.write('Oops! File not found!');
        } 
        res.write(data);
        res.end();
    }); 
    fs.appendFile('./games/item.txt', 'Hello world!', (error) => {
        if(error) throw error;
        //console.log('File Saved');
        res.send('Hurray! File saved!')
    })
}
http.createServer(handlerequest).listen(5002); 
*/