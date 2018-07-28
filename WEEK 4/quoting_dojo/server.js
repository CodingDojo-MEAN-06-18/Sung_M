// require express, path, body-parser
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
// create the express app
var app = express();
// Require Mongoose
var mongoose = require('mongoose');

var flash=require("express-flash");
var session = require('express-session');

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.use(flash());

app.use(bodyParser.urlencoded({ extended: true }));

// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/quoting_dojo');

var quoteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    quote: {
        type: String,
        required: true,
        minlength: 2
    },
    date: {
        type: Date,
        default: Date.now
    }
},
{timestamps: true});
var Quote = mongoose.model('quotes', quoteSchema);

//routes below
app.get('/', function(req, res){
    res.render('index');
  });
  
app.get('/quotes', function (req, res) {
    Quote.find({}, function (err, quotes) {
        if (err) {
            console.log(err);
        }
        res.render('quotes', { quotes: quotes });
    });
});
  
app.post('/quotes', function (req, res) {
    Quote.create(req.body, function (err) {
        if (err) {
            console.log("Error occurred");
            for (var key in err.errors) {
                req.flash("required", err.errors[key].message);
            }
            res.redirect('/');
        }
        else {
            console.log("Added a quote")
            res.redirect('/quotes');
        }
    });
});

// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
	console.log("listening on port 8000");
})


