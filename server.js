var express     = require('express');
var exprHbs     = require('express-handlebars');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');

var PORT = 3000;

var app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/tinydesk_db', {
  useMongoClient: true
});

// Routes
require('./routes/api/routes.js')(app)


// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
