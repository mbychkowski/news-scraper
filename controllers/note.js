var db      = require('../models');

function postNote(body, id, res) {

  console.log('body: ', body);

  db.Note.insert(body)
    .then(dbNote => {
      return db.Headline.findOneAndUpdate({_id: id}, {note: dbNote._id}, {new: true});
    })
    .then(dbHeadline => {
      res.json(dbHeadline);
    })
    .catch(err => {
      res.json(err);
    });

}

function getNotes(id, res) {

  db.Headline
    .findOne({_id: id})
    .populate('note')
    .then(dbHeadline => {res.json(dbHeadline)})
    .catch(err => {res.json(err)});
}

module.exports = {
  postNote: postNote,
  getNotes: getNotes
}
