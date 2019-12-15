const db = require("./conn.js");

class JobApplication {
  constructor(id, date_applied, rejected, accepted, users_id, posts_jobs_id) {
    this.id = id;
    this.date_applied = date_applied;
    this.rejected = rejected;
    this.accepted = accepted;
    this.users_id = users_id;
    this.posts_jobs_id = posts_jobs_id;
  }

  static async getByJobId(job_id) {
    const query = `select * from job_applications where posts_jobs_id=${job_id}`;
    try {
      const response = await db.any(query);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async getByUserId(user_id) {
    const query = `
    select ja.*, pj.*, c.name
    from job_applications ja
    inner join posts_jobs pj on pj.id = ja.posts_jobs_id
    inner join companies c on c.id = pj.companies_id
    where ja.users_id = ${user_id}
    order by ja.date_applied desc`;
    try {
      const response = await db.any(query);
      return response;
    } catch (err) {
      return err.message;
    }
  }
  static async getByJobUserId(job_id, user_id) {
    const query = `select * from job_applications where posts_jobs_id=${job_id} and users_id = ${user_id}`;
    try {
      const response = await db.any(query);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async getApplicants(companies_id) {
    const query = `Select posts_jobs.id, posts_jobs.users_id, date_applied, first_name, last_name, accepted, rejected, title from posts_jobs INNER JOIN job_applications ON posts_jobs.id = job_applications.posts_jobs_id INNER JOIN users on users.id = job_applications.users_id WHERE posts_jobs.companies_id = ${companies_id} ORDER BY date_applied DESC LIMIT 5`;
    try {
      const response = await db.any(query);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async addApplication(user_id, job_id) {
    const query = `insert into job_applications (rejected, accepted, users_id, posts_jobs_id) values (FALSE, FALSE, ${user_id}, ${job_id})`;
    try {
      const response = await db.one(query);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async updateStatusToRejected(applicantId, jobPostId) {
    const query = `UPDATE job_applications set rejected = true WHERE job_applications.posts_jobs_id = ${jobPostId} AND job_applications.users_id = ${applicantId};`
    try {
      const response = await db.result(query);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async removeApplication(id) {
    const query = `delete from job_applications where id = ${id}`;
    try {
      const response = await db.result(query);
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = JobApplication;
