const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BookSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  availability: {
    type: String,
    required: true
  },
  
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Book = mongoose.model("bookitems", BookSchema);
