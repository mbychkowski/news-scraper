// Require all models
var scrapeHeadline  = require('../../controllers/headline.js').scrapeHeadline;

module.exports = function(app) {

  app.get('/scrape', function(req, res) {
    var headlines = scrapeHeadline();
    // headlines.forEach(headline => {

    // })
  });

  // app.post('/scrape', function(req, res) {
  //
  //   db.Headline.find({})
  //     .then(articleData => {
  //       res.json(articleData);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });

}
