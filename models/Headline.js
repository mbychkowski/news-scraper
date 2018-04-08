var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var HeadlineSchema = new Schema({

  title: {
    type: String,
    required: true
  },

  videoUrl: {
    type: String,
    required: true
  },

  imgUrl: {
    type: String,
    required: true
  },

  duration: {
    type: String,
    required: true
  },

  teaser: {
    type: String,
    required: true
  },

  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

var Headline = mongoose.model('Headline', HeadlineSchema);

// Export the Article model
module.exports = Headline;
