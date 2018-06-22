var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');


var session = require('express-session');

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))


app.use(bodyParser.urlencoded({ extended: true }));

// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.sendFile(__dirname + "/static/templates/index.html");
});

app.post('/result', function(req, res) {
    console.log("POST DATA \n\n", req.body)

    var user_info = {
        name: req.body.name,
        dojo_location: req.body.dojo_location,
        fav_language: req.body.fav_language,
        comment: req.body.comment,
    }
    res.render('result', {user: user_info});
});


app.listen(8000, function() {
    console.log("Running in localhost at port 8000");
});