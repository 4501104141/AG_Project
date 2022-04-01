require("dotenv").config();
const express = require('express');
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./config/db");
const User = require("./routes/User");
/* Require package */
app.use(cors());
app.use(express.json({ limit: "10000" }));
app.use(express.urlencoded({ extended: true }));
db();
/* End require package */
app.use("/api/v1/user", User);
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT}`);
});