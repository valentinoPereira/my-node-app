const e = require('../common');
const assert = require('chai').assert;
const db = require('../config/Database');

exports.auth =  async param => {
	return new Promise((resolve, reject) => {
		db.query(`SELECT * FROM admin_table WHERE aname = '${param}'`, function (err, result, fields) {
			try {
				assert.isNull(err, 'there was no error');
				assert.isNotEmpty(result, 'Invalid Username');
				resolve(JSON.stringify(result));
			} catch(err) {
				reject(err);
			}
		});
	});
}
