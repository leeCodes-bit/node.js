var http = require('http');
  var fs = require('fs');
  var port = 8080;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  if (req.method === 'POST'){
    let message ='';
    req.on('data', (data)=>{
        console.log(data)
      message += data.toString('utf8').split('=')[1].split('+').join(' ');;
    //   message += message.toString.split('=')[0];
    });
    req.on('end', ()=>{
      fs.writeFile('./message.txt', message, (err)=>{
        if(err) throw err;
      });
    });
  }
  res.end(`<form action="/message" method="POST">
                <input type="text" name="Message" placeholder="Message" id=""><br>
                <button class="btn btn-success">Submit</button>
            </form>`)
}).listen(port)