const e = require('../common');
const assert = require('chai').assert;
const db = require('../config/Database');

exports.getAllUsers =  async () => {
	return new Promise((resolve, reject) => {
		db.User.fetchAll().then(user => {
			assert.isNotEmpty(user, 'No results found');
			resolve(user.toJSON())
		})
		.catch(err => reject(err));
	});
}

exports.getOneUser =  async param => {
	return new Promise((resolve, reject) => {
		db.User.where('aid', param.id).fetch().then(user => {
			assert.isNotEmpty(user, 'No results found');
			resolve(user.toJSON())
		})
		.catch(err => reject(err));
	});
}
