const http = require('http');
const url = require('url');
let server = http.createServer((req,res)=>{
  let obj = url.parse(req.url,true);
  console.log(obj.query);
  console.log(obj.pathname);
  res.end();
});
server.listen(8080)