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

app.get('/cats', function(request, response) {
    response.render('cats');
});

app.get('/british_shorthair', function(request, response) {
    cat_array = {
        name: "Posh",
        url: "/images/british_shorthair.jpg",
        food: "Cat Nip",
        age: 5,
        sleeping_spots: ["Roof", "Bed", "Sun"],
    }
    response.render('details', {cat: cat_array});
});
app.get('/persian', function(request, response) {
    cat_array = {
        name: "Sphinx",
        url: "/images/persian.jpg",
        food: "Mice",
        age: 10,
        sleeping_spots: ["Basement", "Towel", "Rainy"],
    }
    response.render('details', {cat: cat_array});
});
app.get('/siamese', function(request, response) {
    cat_array = {
        name: "Bandit",
        url: "/images/siamese.jpeg",
        food: "Spaghetti",
        age: 15,
        sleeping_spots: ["Living Room", "Couch", "Cloudy"],
    }
    response.render('details', {cat: cat_array});
});



app.listen(8000, function() {
    console.log("Running in localhost at port 8000");
});