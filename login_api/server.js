const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./database/gym");
const dbuser = require("./controller");
const req = require("express/lib/request");
const res = require("express/lib/response");
const sqlite3 = require ("./sqlite3")
const port =  3000


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

app.get("/users", async (req, res) =>{
    const users=await dbuser.getusers (req, res)
})

app.get("/api/users", (req, res)=>{
    const sql = "SELECT * FROM user"
    sqlite3.all(sql,(err, rows) => {
     if (err) {
         res.status(4000).json({"error": err.message })
         return

     }
         res.json(
            {"message" : "success", "data": rows }
            
            )
    } )



} )

app.listen(1337, () => console.log("server is running at port 1337"));
