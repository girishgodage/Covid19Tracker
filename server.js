//Install Express Server

const express =  require('express');
const path = require('path');

const app = express();

// Serve only the static files from the dist directory
app.use(express.static(__dirname + '/dist/covid19-tracker'))

app.get('/*',function(req,res){
  res.sendFile(path.join(__dirname + '/dist/covid19-tracker/index.html'));
});

// start the app by listening on the default port
app.listen(process.env.PORT || 8080);