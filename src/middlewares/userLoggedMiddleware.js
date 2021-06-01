const jsonTable = require('../models/jsonTable')
const jsonAtajos = jsonTable('users');

const userLoggedMiddleware = (req, res, next) => {
	res.locals.isLogged = false;

	let userNameInCookie = req.cookies.userUserName;
	let userFromCookie = jsonAtajos.findByField('userName', userNameInCookie);

	if (userFromCookie) {
		req.session.userLogged = userFromCookie;
	}

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}

	next();
}

module.exports = userLoggedMiddleware;