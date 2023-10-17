const mongoose = require('mongoose');

mongoose.connect(
  "mongodb+srv://Baroka:Tyoknfoewi89bT@cluster0.d2ay3id.mongodb.net/node-api",
  { useNewUrlParser: true,
    useUnifiedTopology: true
  },
  console.log("Database connected")
);
