const express = require("express");
const router = express.Router();
const controller = require("../controllers/upload.controller");
const processFileMiddleware = require("../middleware/upload");

router.post("/", processFileMiddleware, controller.upload);

module.exports = router;