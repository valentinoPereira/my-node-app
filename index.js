const app = require('express')();
const cors = require('cors');
const port = 3000;

const controller = require('./controllers/User');
const authenticate = require('./controllers/Auth');

const _ = require('lodash');

const mainAuth = (req, res, next) => {
	authenticate.auth(req, res,next);
}

app.use(cors());
app.use(mainAuth);

app.get('/', (req, res) => {
	var data = JSON.parse(req.user);
  	res.json({success: true, msg:`Hello ${_.head(data).aname}`});
});

app.get('/admins', (req, res) => {
	controller.getAllUsers(req, res);
});
app.get('/admins/:id', (req, res) => {
	controller.getOneUser(req, res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
