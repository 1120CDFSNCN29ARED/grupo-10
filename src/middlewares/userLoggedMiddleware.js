/*const jsonTable = require('../models/jsonTable')
const jsonAtajos = jsonTable('users');

const userLoggedMiddleware = (req, res, next) => {
	res.locals.isLogged = false;

	let emaileInCookie = req.cookies.userEmail;
	let emailCookie = jsonAtajos.findByField('email', emailInCookie);

	if (emailCookie) {
		req.session.userLogged = emailCookie;
	}

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}

	next();
}

module.exports = userLoggedMiddleware;*/