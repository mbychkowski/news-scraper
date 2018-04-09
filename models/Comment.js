var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Schema = new Schema({
  title: String,
  body: String,
  dateAdded: {
    type: Date,
    default: Date.now
  }
});

// This creates our model from the above schema, using mongoose's model method
var Comment = mongoose.model('Comment', Schema);

// Export the Note model
module.exports = Comment;
