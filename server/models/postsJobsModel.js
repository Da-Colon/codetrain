const db = require("./conn.js");

class JobPost {
  constructor(
    id,
    title,
    content,
    experience,
    contact_email,
    contact_phone,
    companies_id,
    users_id
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.experience = experience;
    this.contact_email = contact_email;
    this.contact_phone = contact_phone;
    this.companies_id = companies_id;
    this.users_id = users_id;
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

module.exports = JobPost;
