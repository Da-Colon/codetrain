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
      pr.id, title, up_votes, down_votes, short_description, full_description, resource_url, date_posted, is_deleted, users_id, email, first_name, last_name, github_url, linkedin_url, bootcamp_name
    FROM
	    posts_resources as pr
    INNER JOIN users ON users.id = pr.users_id;
`);

  try {
    return query
  } catch {
    return console.log(`Error: Unable to retrieve resources and posters from database`);
  }

}

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

const deleteResource = async (resourceId) => {
  const query = await db.any(`
    UPDATE posts_resources
    SET is_deleted = TRUE
    WHERE id = $1
  `, [resourceId]);
  try {
    console.log('Resource deleted successfully');
    return query
  } catch {
    return console.log(`ERROR: Unable to delete resource from database`);
  }
}

const updateResource = async (
  title,
  short_description,
  full_description,
  resource_url,
  resourceId
) => {
  const query = await db.any(`
      UPDATE posts_resources
      SET title = $1, short_description = $2, full_description = $3, resource_url = $4
      WHERE id = $5
    ;`, [title, short_description, full_description, resource_url, resourceId]
  );
  try {
    return query;
  } catch {
    return console.log(`ERROR: Unable to update resource in database`);
  }
};

module.exports = { getAllResources, saveNewResource, getAllResourcesAndPosters, deleteResource, updateResource };
