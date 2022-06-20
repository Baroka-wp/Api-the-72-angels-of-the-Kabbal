const mongoose = require('mongoose');

const AngelsModel = mongoose.model(
  "node-api",
  {
    order: {
      type: Number,
      require: true,
    },
    hierarchy: {
      type: String,
      require: true,
    },
    fullName: {
      type: String,
      require: true,
    },
    definitionOfName: {
      type: String,
      require: true,
    },
    godName: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: false,
    },
    regenceMonth: {
      type: String,
      require: false,
    },
    regenceDays: {
      type: String,
      require: false,
    },
    regenceHours: {
      type: String,
      require: false,
    },
    colors: {
      type: String,
      require: false,
    },
    scent: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    invocation: {
      type: String,
      require: true,
    },
    exhortation: {
      type: String,
      require: true,
    },
    callFormula: {
      type: String,
      require: true,
    },
    psalms: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    }
  },
  "the-72-angels-of-kabbalah"
);

module.exports = AngelsModel ;
