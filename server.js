const http = require('http');
const api =  require("./app/api.js");
const port = process.env.PORT || 3000;
const server = http.createServer(api);
server.listen(port);
console.log(`API esta on-line: http://localhost:${port}/` );
