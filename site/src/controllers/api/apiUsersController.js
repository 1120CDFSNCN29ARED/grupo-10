const db = require('../../database/models');
const path = require("path");
const imageFilePath = path.join(__dirname, "../public/img/avatars/");

module.exports = {
    list: (req, res) => {
        db.User.findAll({ attributes: ["id", "first_name", "last_name", "email"] })
            .then((users) => {
                users.forEach(user => {
                    user.dataValues.url = `http://localhost:3005/users/api/${user.id}`
                });

                return res.status(200).json({
                    total: users.length,
                    data: users,
                    status: 200,
                })
            })
    },
    detail: (req, res) => {
        db.User.findByPk(req.params.id, { attributes: ["id", "first_name", "last_name", "email", "nickname"] })
            .then((user) => {
                user.dataValues.img_url = `http://localhost:3005/users/api/img/${user.id}`;
                return res.status(200).json({
                    data: user,
                    status: 200
                })
            })
    },

    img: (req, res) => {
        db.User.findByPk(req.params.id, { attributes: ["profile_img"] })
            .then((user_img) => {
                let image = imageFilePath + user_img.dataValues.profile_img;
                res.status(200).send(image);
            })
    }


}