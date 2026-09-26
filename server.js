const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("My DevOps Lab is running!");
});

app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

app.get("/version", (req, res) => {
    res.json({
        version: "2.0.1"
    });

});
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;
