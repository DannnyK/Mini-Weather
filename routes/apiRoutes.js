const express = require("express");
const router = express.Router();
require("dotenv").config();

const test = process.env.TEST;
const weatherApiKey = process.env.WEATHER_API_KEY;

router
	.get("/weather", (req, res) => {
		res.send(`${weatherApiKey}`);
	})
	.get("*", (req, res) => {
		res.send("No token");
	});

module.exports = router;
