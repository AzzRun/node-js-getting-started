var express = require('express');
var app = express();
var request=require('request');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});
app.post('/', function(req, res){
  request.get('http://raspberrydomotic.ddns.net:8080/json.htm?username=YWRtaW4=&password=em52OGEyYjU=&type=command&param=switchlight&idx=1&switchcmd=Off',options,function(err,res,body){
  if(!err && res.statusCode === 200){
    response.render(request.response);
   }});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


