/* global db */

// write your MongoDB shell command here
const country = {
  name: "Francer",
  capital: "Paris",
  continent: "Europe",
};
db.worldAtlas.insertOne(country);
