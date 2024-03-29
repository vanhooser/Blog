var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var gripeSchema = new Schema({
  title: String,
  subltitle: String,
  location: String,
  text: String,
  created_at: Date,
  updated_at: Date
});

// on every save, add the date
gripeSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();
  
  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;
  next();
});

// the schema is useless so far
// we need to create a model using it
var Gripe = mongoose.model('Gripe', gripeSchema);

// make this available to our users in our Node applications
module.exports = Gripe;