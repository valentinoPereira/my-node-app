const db = require('../config/Database');
const assert = require('chai').assert;

exports.getAllUsers =  async () => {
	return new Promise((resolve, reject) => {
		db.query(`SELECT * FROM admin_table`, function (err, result, fields) {
			try {
				assert.isNull(err, 'Database Error');
				assert.isNotEmpty(result, 'No Results Found');
				resolve(JSON.stringify(result));
			} catch(err) {
				reject(err);
			}
		});
	});
}
