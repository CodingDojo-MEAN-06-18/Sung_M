module.exports = function Route(app, server){
	// this gets the socket.io module
	var io = require('socket.io').listen(server) 
	// root route to render the index.ejs view
	app.get('/', function(req, res) {
		res.render("index");
	})
	var counter = 0;

	//listen to connection even from the client side
	io.sockets.on('connection', function(socket) {
		// server listens to 'button_pressed' event
		socket.on('button_pressed', function(data) {
			counter ++;
			io.emit('update_message', counter);
		});
		// server listens to 'reset' event
		socket.on('reset', function(data) {
			counter = 0;
			io.emit('update_message', counter)
		});
	})
};