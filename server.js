var mongoose = require("mongoose");

var Example = require("./exampleModel");

mongoose.connect("mongodb://localhost/schemaexample", {
  useNewUrlParser: true
});

var data = {
  name: "ferfer",
  familyName: "perper",
  text: "this is a dummy text",
  email: "ferfer.perper@gmaail.com"
};

Example.create(data)
  .then(function(dbexample) {
    console.log(dbexample);
  })
  .catch(function(err) {
    console.log(err.message);
  });
