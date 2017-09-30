const assert = require('chai').assert;

exports.errorHander = (err, res, status, msg = 'Something went wrong!') => {
	if(assert.typeOf(msg, 'string')) {
		err = msg;
	}
	res.status(status).json({success: false, debugging_error: err, msg: msg});
}

exports.msg = msg => {
	return {message: msg}
}
