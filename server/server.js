const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./database/gym");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/admin/gym", async (req, res) => {
    const results = await db.createGym(req.body);
    res.status(201).json({ sucess: "Gym added successfully" });
});

app.get("/admin/gym", async (req, res) => {
    const gyms = await db.getAllGyms();
    res.status(200).json({ gyms });
});

app.patch("/admin/gym/:id", async (req, res) => {
    const id = await db.updateGym(req.params.id, req.body);
    res.status(200).json({ success: true });
});

app.delete("/admin/gym/:id", async (req, res) => {
    await db.deleteGym(req.params.id);
    res.status(200).json({ success: true});
});

app.listen(1337, () => console.log("server is running at port 1337"));