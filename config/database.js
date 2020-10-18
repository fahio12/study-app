const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.DB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));
