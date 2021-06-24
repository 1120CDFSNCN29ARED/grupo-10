const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {      
        let folder = path.resolve(__dirname, '../../public/img/avatars');
        cb(null, folder);
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
})

const uploadFile = multer({ storage: storage });
module.exports = uploadFile;
