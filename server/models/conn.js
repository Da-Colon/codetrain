const pgp = require("pg-promise")({
  query: e => {
    console.log("QUERY:", e.query);
  }
});

const options = {
  host: "localhost",
  database: "codetrain",
  user: "prescottsun",
  password: "password"
};

const db = pgp(options);

module.exports = db;
