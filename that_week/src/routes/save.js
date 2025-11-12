var express = require("express");
var router = express.Router();

var saveController = require("../controllers/saveController");

//Recebendo os dados do html e direcionando para a função save de saveController.js

router.post("/save", function (req, res) {
    saveController.save(req, res);
})

router.post("/load", function (req, res) {
    saveController.load(req, res);
});

module.exports = router;