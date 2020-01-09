#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT_DIR = process.argv[2] || process.env.HTTP_FOLDER_ROOT_DIR || __dirname
const PORT = process.argv[3] || process.env.HTTP_FOLDER_PORT || 8080;

const httpServer = http.createServer(requestHandler);
httpServer.listen(PORT, () => { console.log(`Serving ${ROOT_DIR} on port ${PORT}`) });

function requestHandler(req, res) {
    const { method, url } = req;
    console.log(method, url)

    if (url === '/') {
        return dir(req, res);
    }
    if (method == "GET") {
        return download(req, res);
    }
    if (method == "POST") {
        return upload(req, res);
    }

    return error(req, res, "Bad Request");
}

function error(req, res, message) {
    res.writeHead(400, {'Content-Type': 'text/plain'});
    res.write(message);
    res.end();
}

function dir(req, res) {
    fs.readdir(ROOT_DIR, (err, files) => {
        if (err) {
            console.log(err);
            return error(req, res, err.message);
        }

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(files));
        res.end();
    });
}

function download(req, res) {
    let file = path.join(ROOT_DIR, req.url);
    fs.readFile(file, (err, content) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write('File Not Found');
            res.end();
            return;
        }
        res.writeHead(200, {'Content-Type': 'application/octet-stream'});
        res.write(content);
        res.end();
    });
}

function upload(req, res) {
    let file = path.join(ROOT_DIR, req.url);
    req.pipe(fs.createWriteStream(file));
    req.on('end', () => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Uploaded succesfully');
        res.end();
    })
}
