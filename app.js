const express = require('express');
const app = express();
const studentsRoutes = require('./controllers/studentsController');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./models/dbConfig.js');
const port = process.env.PORT || 3001;
//MiddleWare
app.use(bodyParser.json());
app.use(cors())
app.use('/', studentsRoutes)


// Serve the files on port 8080.
app.listen(port, () => {
  console.log('Listening on port 3001!\n');
});
