const express = require('express');


var compression = require('compression')
var app = express();

const v8 = require('v8');

app.use(compression())

app.use(express.static('docs'));
app.get("/", function(req, res) {
   res.sendfile('index.html')
});


var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
