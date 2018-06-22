var express = require('./node_modules/express');

var app = express();

app.use(express.static(__dirname + '/static')),

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');


app.get('/', function(request, response) {
    response.sendFile(__dirname + "/static/index.html");
});
app.get('/cars', function(request, response) {
    response.render('cars');
});
app.get('/static/gwagon.jpg', function(request, response) {
    response.sendFile(__dirname + "/static/gwagon.jpg");
});

app.get('/cats', function(request, response) {
    response.render('cats');
});
app.get('/static/cat.jpg', function(request, response) {
    response.sendFile(__dirname + "/static/cat.jpg");
});

app.get('/cars/new', function(request, response) {
    response.render('new_car');
});
app.get('/static/style.css', function(request, response) {
    response.sendFile(__dirname + "/static/style.css");
});


app.listen(8000, function() {
    console.log("Running in localhost at port 8000");
});