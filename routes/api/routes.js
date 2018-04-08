// Require all models
var db              = require('../../models');
var scrapeHeadline  = require('../../controllers/headline.js').scrapeHeadline;

module.exports = function(app) {

  app.get('/scrape', function(req, res) {
    scrapeHeadline();
  });

  app.get('/api/scrape', function(req, res) {
    db.Headline.find({})
    .then(data => res.json(data))
    .catch(err => res.json(err));
  });

}
