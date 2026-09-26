const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(500).send("Something went wrong!");
});

app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

app.get("/version", (req, res) => {
    res.json({
        version: "2.0.3"
    });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;
