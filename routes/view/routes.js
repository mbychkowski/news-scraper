// Require all models
var db              = require('../../models');
var scrapeHeadline  = require('../../controllers/headline.js').scrapeHeadline;

module.exports = function(app) {

  app.get('/', function(req, res) {
    db.Headline.find({}).sort({ 'date': -1 })

      .then(data => {
        var hbsObject = {
          concerts: data,
        }
        
        res.render('home', hbsObject);
      });
  });

}
