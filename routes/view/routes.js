// Require all models
var db              = require('../../models');
var scrapeHeadline  = require('../../controllers/headline.js').scrapeHeadline;

module.exports = function(app) {

  app.get('/concerts', function(req, res) {
    db.Headline.find({})
      .then(data => {
        var hbsObject = {
          concerts: data,
        }
        res.render("home", hbsObject);
      });
  });

}
