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


// root route to render the index.ejs view
app.get('/', function(req, res) {
	if (req.session.counter) {
		req.session.counter++;
	} else {
		req.session.counter = 1;
	}
	res.render("index", {counter: req.session.counter});
});

// Ninja Level 1 
// Add a +2 button underneath the counter that reloads the page and increments counter by 2.
// Add another route to handle this functionality.
app.get('/plustwo', function(req,res) {
	req.session.counter++;
	res.redirect('/');
})

// Ninja Level 2
// Add a reset button that resets the counter back to 1.
// Add another route to handle this functionality.
app.get('/reset', function(req,res) {
	req.session.counter = 0;
	res.redirect('/')
})


// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});