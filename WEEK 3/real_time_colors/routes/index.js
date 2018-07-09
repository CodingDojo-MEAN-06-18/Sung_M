module.exports = function Route(app, server){
	// this gets the socket.io module
	var io = require('socket.io').listen(server) 
	// root route to render the index.ejs view
	app.get('/', function(req, res) {
		res.render("index");
	})

	//listen to connection event from the client side
	io.sockets.on('connection', function (socket){
		// listen to 'green_pressed' event 
		socket.on('green_pressed', function(data){
			io.emit('change_green');
		});
		// listen to 'blue_pressed' event
		socket.on('blue_pressed', function(data){
			io.emit('change_blue');
		});
		// listen to 'pink_pressed' event
		socket.on('pink_pressed', function(data){
			io.emit('change_pink');
		});
	});
};