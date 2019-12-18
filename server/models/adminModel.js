const db = require("./conn.js");

// ALL REPORTS UNRESOLVED

// get all reports not resolved
const getReports = () => {
  const query = db.any(
    `SELECT reports.id, users.auth userAuth, first_name, last_name, submited_by, name, posts_jobs.title, posts_resources.title from reports LEFT JOIN companies on reports.companies_id = companies.id LEFT JOIN users ON reports.submited_by = users.id LEFT JOIN posts_jobs ON reports.posts_jobs_id = posts_jobs.id LEFT JOIN posts_resources ON reports.resource_id = posts_resources.id WHERE resolved = false`
  );
  try {
    return query;
  } catch {
    console.log("There was an error when retrieving the reports");
  }
};

// get all user reports
const getUsersReports = () => {
  const query = db.any(
    `SELECT reports.id, users_id, users.auth userAuth, first_name, last_name, date_reported  from reports INNER JOIN users ON reports.submited_by = users.id WHERE users_id IS NOT NULL AND resolved = FALSE ORDER BY date_reported ASC;`
  );
  try {
    return query;
  } catch {
    console.log("There was an error when retrieving the reports");
  }
};

// get all company reports
const getCompaniesReports = () => {
  const query = db.any(
    `SELECT reports.id, name, first_name, users.auth userAuth, last_name, date_reported from reports INNER JOIN companies on companies.id = reports.companies_id INNER JOIN users ON reports.submited_by = users.id WHERE reports.companies_id IS NOT NULL AND resolved = FALSE ORDER BY date_reported ASC;`
  );
  try {
    return query;
  } catch {
    console.log("There was an error when retrieving the reports");
  }
};

// get all job reports
const getJobsReports = () => {
  const query = db.any(
    `SELECT reports.id, name, title, date_reported, users.auth userAuth, first_name, last_name from reports INNER JOIN posts_jobs on reports.posts_jobs_id = posts_jobs.id INNER JOIN companies on companies.id = reports.companies_id INNER JOIN users ON reports.submited_by = users.id WHERE reports.companies_id IS NOT NULL AND resolved = FALSE ORDER BY date_reported ASC;`
  );
  try {
    return query;
  } catch {
    console.log("There was an error when retrieving the reports");
  }
};

// get all resource reports
const getResourcesReports = () => {
  const query = db.any(
    `SELECT reports.id, first_name, last_name, submited_by, users.auth userAuth, date_reported, title from reports INNER JOIN posts_resources ON reports.resource_id = posts_resources.id INNER JOIN users ON users.id = posts_resources.users_id WHERE resource_id IS NOT NULL AND resolved = false;`
  );
  try {
    return query;
  } catch {
    console.log("There was an error when retrieving the reports");
  }
};

const getSingleReport = (report_id) => {
  const query = db.one(`SELECT reports.id, first_name, auth, last_name, submited_by, name, posts_jobs.title jobTitle, posts_resources.title resourceTitle, reason, reports.companies_id, reports.resource_id, reports.posts_jobs_id, reports.users_id, resolved from reports LEFT JOIN companies on reports.companies_id = companies.id LEFT JOIN users ON reports.users_id = users.id LEFT JOIN posts_jobs ON reports.posts_jobs_id = posts_jobs.id LEFT JOIN posts_resources ON reports.resource_id = posts_resources.id WHERE reports.id = $1;`, [report_id])
  try {
    return query;
  } catch {
    console.log("There was an error when retrieving the reports");
  }
}

// ALL REPORTS RESOLVED

const getResolvedReports = () => {
  const query = db.any(
    `SELECT reports.id, first_name, last_name, submited_by, users.auth userAuth, name, posts_jobs.title, posts_resources.title from reports LEFT JOIN companies on reports.companies_id = companies.id LEFT JOIN users ON reports.submited_by = users.id LEFT JOIN posts_jobs ON reports.posts_jobs_id = posts_jobs.id LEFT JOIN posts_resources ON reports.resource_id = posts_resources.id WHERE resolved = TRUE`
  );
  try {
    return query;
  } catch {
    console.log("There was an error when retrieving the reports");
  }
};

// get all user reports
const getResolvedUsersReports = () => {
  const query = db.any(
    `SELECT reports.id, users_id, first_name, last_name, users.auth userAuth, date_reported  from reports INNER JOIN users ON reports.submited_by = users.id WHERE users_id IS NOT NULL AND resolved = TRUE ORDER BY date_reported ASC;`
  );
  try {
    return query;
  } catch {
    console.log("There was an error when retrieving the reports");
  }
};

// get all company reports
const getResolvedCompaniesReports = () => {
  const query = db.any(
    `SELECT reports.id, name, first_name, last_name, users.auth userAuth, date_reported from reports INNER JOIN companies on companies.id = reports.companies_id INNER JOIN users ON reports.submited_by = users.id WHERE reports.companies_id IS NOT NULL AND resolved = TRUE ORDER BY date_reported ASC;`
  );
  try {
    return query;
  } catch {
    console.log("There was an error when retrieving the reports");
  }
};

// get all job reports
const getResolvedJobsReports = () => {
  const query = db.any(
    `SELECT reports.id, name, title, date_reported, users.auth userAuth, first_name, last_name from reports INNER JOIN posts_jobs on reports.posts_jobs_id = posts_jobs.id INNER JOIN companies on companies.id = reports.companies_id INNER JOIN users ON reports.submited_by = users.id WHERE reports.companies_id IS NOT NULL AND resolved = TRUE ORDER BY date_reported ASC;`
  );
  try {
    return query;
  } catch {
    console.log("There was an error when retrieving the reports");
  }
};

// get all resource reports
const getResolvedResourcesReports = () => {
  const query = db.any(
    `SELECT reports.id, first_name, last_name, users.auth userAuth, submited_by, date_reported, title from reports INNER JOIN posts_resources ON reports.resource_id = posts_resources.id INNER JOIN users ON users.id = posts_resources.users_id WHERE resource_id IS NOT NULL AND resolved = TRUE;`
  );
  try {
    return query;
  } catch {
    console.log("There was an error when retrieving the reports");
  }
};

// get all reports about a user
const getAllUserReports = user_id => {
  const query = db.any(`SELECT * from reports WHERE users_id = $1;`, [user_id]);
  try {
    return query;
  } catch {
    console.log("There was an error when retrieving the reports");
  }
};

// get all reports about a company
const getAllCompanyReports = companies_id => {
  const query = db.any(`SELECT * from reports WHERE companies_id = $1;`, [
    companies_id
  ]);
  try {
    return query;
  } catch {
    console.log("There was an error when retrieving the reports");
  }
};

// get all reports about a job posts
const getAllJobReports = jobs_posts_id => {
  const query = db.any(
    `SELECT * from reports WHERE jobs_posts_id = ${jobs_posts_id}`
  );
  try {
    return query;
  } catch {
    console.log("There was an error when retrieving the reports");
  }
};
// CHANGE THESE BACK WHEN YOU FINISH DINNER NEEDS SINGLE RESOURCE ID
// get all reports about a resource post
const getAllResourceReports = resource_id => {
  const query = db.any(`SELECT * from reports WHERE resource_id = $1;`, [
    resource_id
  ]);
  try {
    return query;
  } catch {
    console.log("There was an error when retrieving the reports");
  }
};

// delete/change auth of user
const removeAuthUser = users_id => {
  console.log(users_id)
  const query = db.result(`UPDATE users SET auth = false WHERE id = $1;`, [
    users_id
  ]);
  try {
    return query;
  } catch {
    console.log("There was an error when accessing database");
  }
};

// delete/change auth of users of a company
const removeAuthCompanyUsers = companies_id => {
  const query = db.any(
    `UPDATE users SET auth = FAlSE WHERE companies_id = $1;`,
    [companies_id]
  );
  try {
    return query;
  } catch {
    console.log("There was an error when accessing database");
  }
};

// post message all users of a reported company
const sendMessageCompany = async (
  subject,
  message,
  sent_from,
  companies_id
) => {
  // GET all users from a company
  const getUsers = await db.any(
    `SELECT id FROM users WHERE companies_id = $1;`,
    [companies_id]
  );
  // maps through getUsers to make a new array of just the ids
  const companyUsers = getUsers.map(obj => {
    Object.keys(obj)
      .sort()
      .map(key => {
        obj[key];
      });
  });
  // map through ids and send message to those users
  const query = await companyUsers.map(async sent_to => {
    console.log("THIS", sent_to);
    await db.any(
      `INSERT INTO private_messages (subject, message, sent_from, sent_to) VALUES ($1, $2, $3, $4);`,
      [subject, message, sent_from, sent_to[0]]
    );
  });
  try {
    return query;
  } catch {
    return console.log(`ERROR: Unable save to database`);
  }
};

// post message to reported user
const sendMessageUser = (subject, message, sent_from, sent_to) => {
  const query = db.any(
    `INSERT INTO private_messages (subject, message, sent_to, sent_from) VALUES ($1, $2, $3, $4);`,
    [subject, message, sent_to, sent_from]
  );
  try {
    return query;
  } catch {
    return console.log(`ERROR: Unable save to database`);
  }
};

// // search user
// const findUser = () => {

// }

// // search company
// const findCompany = () => {

// }

// post report
const postReport = (
  users_id,
  posts_jobs_id,
  companies_id,
  resource_id,
  reason,
  submited_by
) => {
  const postQuery = db.any(
    `INSERT INTO reports (users_id, posts_jobs_id, companies_id, resource_id, submited_by, reason) VALUES ($1,$2,$3,$4,$5,$6)`,
    [users_id, posts_jobs_id, companies_id, resource_id, reason, submited_by]
  );
  try {
    return postQuery;
  } catch {
    return console.log(`ERROR: Unable save to database`);
  }
};

// delete post resource
const deleteResource = resource_id => {
  const query = db.any(`DELETE from posts_resources WHERE id = $1;`, [
    resource_id
  ]);
  try {
    return query;
  } catch (err) {
    return err.message;
  }
};

// delete post job
const deleteJob = jobs_posts_id => {
  const query = db.any(`DELETE from posts_jobs WHERE id = $1;`, [
    jobs_posts_id
  ]);
  try {
    return query;
  } catch (err) {
    return err.message;
  }
};

// resolve issue
const resolveIssue = report_id => {
  const query = db.any(`UPDATE reports SET resolved = TRUE WHERE id = $1;`, [
    report_id
  ]);
  try {
    return query;
  } catch {
    console.log("There was an error when accessing database");
  }
};

module.exports = {
  getAllCompanyReports,
  getAllJobReports,
  getAllResourceReports,
  getAllUserReports,
  sendMessageCompany,
  sendMessageUser,
  postReport,
  deleteJob,
  deleteResource,
  // findCompany,
  // findUser,
  removeAuthCompanyUsers,
  removeAuthUser,
  getReports,
  resolveIssue,
  getCompaniesReports,
  getUsersReports,
  getJobsReports,
  getResourcesReports,
  getResolvedReports,
  getResolvedUsersReports,
  getResolvedCompaniesReports,
  getResolvedJobsReports,
  getResolvedResourcesReports,
  getSingleReport
};
