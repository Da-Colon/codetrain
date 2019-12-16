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

const getAllResourcesAndPosters = async () => {
  const query = await db.any(`
    SELECT 
      pr.id, title, up_votes, down_votes, short_description, full_description, resource_url, date_posted, users_id, email, first_name, last_name, github_url, linkedin_url, bootcamp_name
    FROM
	    posts_resources as pr
    INNER JOIN users ON users.id = pr.users_id;
`);

  try {
    return query;
  } catch {
    return console.log(
      `Error: Unable to retrieve resources and posters from database`
    );
  }
};

const getResourceandPosterById = async id => {
  const query = await db.one(`
    SELECT 
      pr.id, title, up_votes, down_votes, short_description, full_description, resource_url, date_posted, users_id, email, first_name, last_name, github_url, linkedin_url, bootcamp_name
    FROM
	    posts_resources as pr
    INNER JOIN users ON users.id = pr.users_id
    WHERE pr.id = ${id};
`);

  try {
    return query;
  } catch {
    return console.log(
      `Error: Unable to retrieve resources and posters from database`
    );
  }
};

const saveNewResource = async (
  title,
  short_description,
  full_description,
  resource_url,
  userId
) => {
  const query = await db.any(
    `INSERT INTO posts_resources (title, short_description, full_description, resource_url, users_id) VALUES ($1, $2, $3, $4, $5);`,
    [title, short_description, full_description, resource_url, userId]
  );
  try {
    return query;
  } catch {
    return console.log(`ERROR: Unable to save to database`);
  }
};

const deleteResource = async resourceId => {
  const query = await db.any(
    `
    DELETE FROM posts_resources
    WHERE id = $1
  `,
    [resourceId]
  );
  try {
    console.log("Resource deleted successfully");
    return query;
  } catch {
    return console.log(`ERROR: Unable to delete resource from database`);
  }
};

module.exports = {
  getAllResources,
  saveNewResource,
  getAllResourcesAndPosters,
  deleteResource,
  getResourceandPosterById
};
