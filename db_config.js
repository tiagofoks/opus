var db_string = 'mongodb://127.0.0.1/opus';

var mongoose = require('mongoose').connect(db_string);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar no banco'))

db.once ('open', function(){
	
	var userSchema = mongoose.Schema({
		
		fullname: String,
		email: String,
		password: String,
		created_at: Date
	});

	exports.User = mongoose.model('User', userSchema);
});