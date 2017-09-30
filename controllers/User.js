const model = require('../models/User');
const e = require('../common');

exports.getAllUsers = async (req, res) => {
	try {
		let users = await model.getAllUsers();
		res.send(users);
	} catch(err) {
		e.errorHander(err.message, res, 500);
	}
}
