const mongoose = require('mongoose');

let commentSchema = mongoose.Schema({
	text: {
		type: String,
		required: 'Wpisz treść komentarza.'
	},
	createdAt: { type: Date, default: Date.now },
	author: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
		username: String,
		avatar: String
	}
});

module.exports = mongoose.model('Comment', commentSchema);