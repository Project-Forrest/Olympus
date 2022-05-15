const knex = require("./knex");
const { v4: uuidv4 } = require("uuid");

function createGym(gym) {
    gym.ID = uuidv4();
    return knex("GYM").insert(gym);
};

function getAllGyms() {
    return knex("GYM").select("*");
};

function deleteGym(id) {
    return knex("GYM").where("ID", id).del();
};

function updateGym(id, gym) {
    return knex("GYM").where("ID", id).update(gym);
};

module.exports = {
    createGym,
    getAllGyms,
    deleteGym,
    updateGym
}