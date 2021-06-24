const authMiddleware = (req, res, next) => {
	if (!req.session.userLogged) {
		return res.redirect('/users/log-in');
	}
	next();
}

module.exports = authMiddleware;