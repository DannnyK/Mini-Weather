const express = require("express");
require("dotenv").config();
const apiRoutes = require("./routes/apiRoutes.js");
const cors = require("cors");
////////////////////////
const app = express();
const PORT = process.env.PORT || 4500;
////////////////////////
app.use(cors());
app.use("/", apiRoutes);

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
