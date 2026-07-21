const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Docker Security & Optimization Demo");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});