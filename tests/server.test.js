const test = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");

const app = require("../server");

test("GET /health returns status ok", async () => {
    const response = await request(app).get("/health");

    assert.equal(response.statusCode, 200);
    assert.deepEqual(response.body, {
        status: "ok"
    });
});

test("GET / returns the homepage", async () => {
    const response = await request(app).get("/");

    assert.equal(response.statusCode, 200);
    assert.equal(response.text, "My DevOps Lab is running!");
});

test("GET /version returns version 2.0.2", async () => {
    const response = await request(app).get("/version");

    assert.equal(response.statusCode, 200);
    assert.deepEqual(response.body, {
        version: "2.0.2"
    });
});
