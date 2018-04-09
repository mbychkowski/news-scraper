// Require all models
var db              = require('../../models');
var scrapeHeadline  = require('../../controllers/headline.js').scrapeHeadline;
var getComments     = require('../../controllers/comment.js').getComments;
var postComment     = require('../../controllers/comment.js').postComment;

module.exports = function(app) {

  app.get('/scrape', function(req, res) {

    scrapeHeadline();

  });

  app.get('/api/scrape', function(req, res) {

    db.Headline.find({})
      .then(data => res.json(data))
      .catch(err => res.json(err));

  });

  // Route for grabbing a specific Headline by id, populate it with it's note
  app.get('/:id', function(req, res) {

    var id = req.params.id;
    console.log('id: ' + id);
    getComments(id, res)

  });

  // Route for saving/updating an Headlines's associated Note
  app.post('/:id', function(req, res) {

    var body = req.body;
    var id = req.params.id;
    postComment(body, id, res)

  });

}
