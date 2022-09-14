var http = require("http");
const port=8081;

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    console.log(req.url)
    let url=req.url;
    let responsedata= { phone: '18602100000',   
    email: 'guestcaredominos@jublfood.com' }
    let jsoncontent=JSON.stringify(responsedata);
    if(url=="/welcome")
    {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end("Welcome to Dominos")
    }
    else if(url=="/contact")
    {res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(responsedata)) 
    }
    else{
        res.statusCode=404
        res.end("page not found")
    }
  
}
httpServer.listen(port,()=>{
    console.log("server listening")
})

module.exports = httpServer;