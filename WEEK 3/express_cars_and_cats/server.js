var express = require('./node_modules/express');

var app = express();

app.use(express.static(__dirname + '/static')),

app.get('/', function(request, response) {
    response.sendFile(__dirname + "/static/index.html");
});
app.get('/cars.html', function(request, response) {
    response.sendFile(__dirname + "/static/cars.html");
});
app.get('/static/gwagon.jpg', function(request, response) {
    response.sendFile(__dirname + "/static/gwagon.jpg");
});
app.get('/cats.html', function(request, response) {
    response.sendFile(__dirname + "/static/cats.html");
});
app.get('/static/cat.jpg', function(request, response) {
    response.sendFile(__dirname + "/static/cat.jpg");
});
app.get('/form.html', function(request, response) {
    response.sendFile(__dirname + "/static/new_car.html");
});
app.get('/static/style.css', function(request, response) {
    response.sendFile(__dirname + "/static/style.css");
});


app.listen(8000, function() {
    console.log("Running in localhost at port 8000");
});