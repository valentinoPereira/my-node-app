const model = require('../models/Auth');
const e = require('../common');
const assert = require('chai').assert;

exports.auth = async (req, res, next) => {
	try {
		assert.isOk(req.headers.username, 'Username should be defined');
		req.user = await model.auth(req.headers.username);
		next();
	} 
	catch(err) {
		e.errorHander(err.message, res, 401);
	}
}
