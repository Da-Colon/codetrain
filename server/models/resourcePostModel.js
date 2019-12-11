const db = require("./conn");

const getAllResources = async () => {
  const query = await db.any(
    `SELECT * FROM posts_resources ORDER BY date_posted DESC LIMIT 5;`
  );
  try {
    return query;
  } catch {
    return console.log(`Error: Unable to retrieve resources from database`);
  }
};

const saveNewResource = async (
  title,
  short_description,
  full_description,
  resource_url,
  userId
) => {
  const query = await db.any(`INSERT INTO posts_resources (title, short_description, full_description, resource_url, users_id) VALUES ($1, $2, $3, $4, $5);`, [title, short_description, full_description, resource_url, userId]
  );
  try {
    return query;
  } catch {
    return console.log(`ERROR: Unable to save to database`);
  }
};

module.exports = { getAllResources, saveNewResource };
