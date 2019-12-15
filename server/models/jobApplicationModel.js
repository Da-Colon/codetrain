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
    const query = `select * from job_applications where posts_jobs_id= ${job_id}`;
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

  static async addApplication(user_id, job_id) {
    const query = `insert into job_applications (rejected, accepted, users_id, posts_jobs_id) values (FALSE, FALSE, ${user_id}, ${job_id})`;
    try {
      const response = await db.result(query);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async updateStatus(id, status, statusChange) {
    const query = `update job_applications set ${status} = ${statusChange} where id = ${id}`;
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
