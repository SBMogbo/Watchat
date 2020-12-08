const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/watchat', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
