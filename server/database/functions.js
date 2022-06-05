const knex = require("./knex");
const { v4: uuidv4 } = require("uuid");

function createGym(gym) {
    gym.ID = uuidv4();
    return knex("GYM").insert(gym);
};

function getAllGyms() {
    return knex("GYM").select("*");
};

function getGym(id) {
    return knex("GYM").select("*").where("ID", id);
};

function deleteGym(id) {
    return knex("GYM").where("ID", id).del();
};

function updateGym(id, gym) {
    return knex("GYM").where("ID", id).update(gym);
};

function getUser(id) {
    return knex("USER").select("*").where("ID", id);
};

function getDayCode(id) {
    return knex("DAY_CODE").select("*").where("ID", id);
};

function createDayCode(daycode) {
    daycode.ID = uuidv4();
    daycode.IS_VALID = 'true';
    daycode.EXPIRATION_DATE = new Date.toISOString().slice(0, 10);
    return knex("DAY_CODE").insert(daycode);
};

module.exports = {
    createGym,
    getAllGyms,
    deleteGym,
    updateGym,
    getGym,
    createDayCode,
    getUser,
    getDayCode
}