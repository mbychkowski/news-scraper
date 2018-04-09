var express     = require('express');
var exphbs      = require('express-handlebars');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');

var port = process.env.PORT || 3000;

var app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/tinydesk_db";

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/tinydesk_db', {
  useMongoClient: true
});

// Routes
require('./routes/api/routes.js')(app)
require('./routes/view/routes.js')(app)

// Start the server
app.listen(port, function() {
  console.log("App running on port " + port + "!");
});
