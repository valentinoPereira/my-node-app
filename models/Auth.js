const e = require('../common');
const assert = require('chai').assert;
const db = require('../config/Database');

exports.auth =  async param => {
	return new Promise((resolve, reject) => {
		db.User.where('aname', param).fetch().then(user => {
			assert.isNotEmpty(user, 'Invalid Username');
			resolve(user.toJSON())
		})
		.catch(err => reject(err));
	});
}
