const express = require('express');
const app = express();

// START server
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/client/index.html");
});

app.listen(3000, function (){
    console.log('App listening on port 3000!');
});
