const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./database/functions");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Olympus Admin Control API",
            version: "1.0.0",
            description: "An API for Olympus admins to control the main tables."
        },
        servers: [
            {
                url: "https://olympus-gym-api.herokuapp.com",
                description: "Production Server"
            },
            {
                url: "http://localhost:1337",
                description: "Development Server"
            }
        ]
    },
    apis: ["./database/api-docs.js"],
}

const app = express();

const specs = swaggerJsDoc(options);

app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

app.use("/admin/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

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

app.listen(1337, () => console.log("server is running at port 1337"));