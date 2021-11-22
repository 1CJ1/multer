const express = require("express");
const router = express.Router();

const indexController = require("../controllers/index")


/**
 * Zobrazeni formulare
 * Method: GET
 * URL: /
 */
router.get("/", indexController.getForm);


/**
 * Pro nahrani souboru
 * Method: POST
 * URL: /upload
 */
router.post("/upload", indexController.postUpload);

module.exports = router;