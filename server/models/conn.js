const pgp = require("pg-promise")({
  query: e => {
      console.log("QUERY:", e.query);
  }
});

const options = {
  host: "localhost",
  database: "codetrain", 
  user: process.env.USER,
  password: process.env.PASSWORD,
};

const db = pgp(options);

module.exports = db;