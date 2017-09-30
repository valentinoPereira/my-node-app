const knex = require('knex')({
	client: 'mysql',
	connection: {
		host: "localhost",
		user: "root",
		password: "",
		database: "bank"
	}
});

const bookshelf = require('bookshelf')(knex);

module.exports.User = bookshelf.Model.extend({
  tableName: 'admin_table'
});
