var db = require('../models');

function postComment(body, id, res) {

  db.Comment.create(body)
    .then(dbComment => {
      return db.Headline
      .findOneAndUpdate({_id: id}, {note: dbComment._id}, {new: true});
    })
    .then(dbHeadline => {
      res.json(dbHeadline);
    })
    .catch(err => {
      res.json(err);
    });

}

function getComments(id, res) {

  db.Headline
    .findOne({_id: id})
    .populate('comment')
    .then(dbHeadline => {res.json(dbHeadline)})
    .catch(err => {res.json(err)});
}

module.exports = {
  postComment: postComment,
  getComments: getComments
}
