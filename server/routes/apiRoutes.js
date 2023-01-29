const express = require("express");
const router = express.Router();
require("dotenv").config();

const test = process.env.TEST;

router
	.get("/", (req, res) => {
		res.send("No token");
	})
	.get("/about", (req, res) => {
		res.send(`${test}`);
	});

module.exports = router;
