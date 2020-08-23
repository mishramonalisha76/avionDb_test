// import http from "http"
// import app from "./app"
const http = require('http');
const app = require('./app'); 

const port = process.env.PORT || 3000;
const server = http.createServer(app);

console.log(port);
server.listen(port);