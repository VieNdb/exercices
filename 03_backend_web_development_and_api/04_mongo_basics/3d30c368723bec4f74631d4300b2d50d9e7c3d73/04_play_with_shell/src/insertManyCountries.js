/* global db */

// write your MongoDB shell command here
const country = [
  {
    name: "Francer",
    capital: "Paris",
    continent: "Europe",
  },
  {
    name: "RDC",
    capital: "Kinshasa",
    continent: "Afrique",
  },
  {
    name: "URSS",
    capital: "Moscu",
    continent: "Europe",
  },
];
db.worldAtlas.insertMany(country);
