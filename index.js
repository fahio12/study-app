const express = require("express");
const app = express();
const handlebars  = require('express-handlebars');
require('dotenv').config()
// routes
const home = require('./routes/home');
const study = require('./routes/study');
const profile = require('./routes/profile');


app.engine('handlebars', handlebars());

app.engine('.hbs', handlebars({
  defaultLayout: "main",
  extname:".hbs",
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials',
}));
app.set('view engine','.hbs');

app.use('/',home)
app.use('/study',study)
app.use('/profile',profile)

app.listen(process.env.PORT, () => {
  console.log("Server on");
})
