var mongoose = require("mongoose");

var schema = mongoose.Schema;

var myBlog = new schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  familyName: {
    type: String,
    required: true,
    trim: true
  },

  text: {
    type: String,
    validate: [
      function(input) {
        return input.length > 6;
      },
      "the input shall contain more than 6 characters"
    ]
  },

  email: {
    type: String,
    match: [/.+@.+\./, "should follow the format"]
  }
});

var Example = mongoose.model("Example", myBlog);

module.exports = Example;
