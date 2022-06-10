const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./database/functions");
const cors = require("cors");

const port = process.env.PORT || 1337;

app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

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

app.get("/admin/gym/:id", async (req, res) => {
    const gym = await db.getGym(req.params.id);
    res.status(200).json({ gym });
});

app.patch("/admin/gym/:id", async (req, res) => {
    const id = await db.updateGym(req.params.id, req.body);
    res.status(200).json({ success: true });
});

app.put("/admin/gym/:id", async (req, res) => {
    const id = await db.updateGym(req.params.id, req.body);
    res.status(200).json({ success: true });
});

app.delete("/admin/gym/:id", async (req, res) => {
    await db.deleteGym(req.params.id);
    res.status(200).json({ success: true});
});

app.get("/user/:id", async (req, res) => {
    const user = await db.getUser(req.params.id);
    res.status(200).json({ user });
});

app.post("/daycode", async (req, res) => {
    const results = await db.createDayCode(req.body);
    res.status(201).json({ sucess: "DayCode added successfully" });
});

app.get("/daycode/:id", async (req, res) => {
    const daycode = await db.getDayCode(req.params.id);
    res.status(200).json({ daycode });
});

app.listen(port, () => console.log(`server is running at port ${port}`));