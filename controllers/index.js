const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/img"));
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const filter = (req, file, cb) => {
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/gif"
        ? cb(null, true)
        : cb(null, false);
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 *10,
    },
    fileFilter: filter,
})


exports.getForm = (req, res) => res.render("upload")
;

exports.postUpload = [
  upload.single("avater"),
    (req,res) => res.render("download", { imageUrl: `/img/${req.file.originalname}` })
];