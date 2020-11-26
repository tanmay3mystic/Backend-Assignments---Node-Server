var http = require("http");

const httpServer = http.createServer(handleServer);

const obj = JSON.stringify({
    phone: '18602100000',
    email: 'guestcaredominos@jublfood.com'
});


function handleServer(req, res) {
  switch(req.url){
      case "/welcome": 
        res.writeHead(200,{
            'Content-Type':'text/plain'
        });
        res.write('Welcome to Dominos!');
        res.end();
        break;
      case "/contact":
        res.writeHead(200,{
            'Content-Type':'application/json'
        });
        res.write(obj);
        res.end();
          break;
      default:
        res.writeHead(404,{});
        res.write('server not found!!');
        res.end();        
  }
}
httpServer.listen(9990);
module.exports = httpServer;