const db = require("./conn.js");

class JobPosts {
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

  static async addJob(
    title,
    content,
    experience,
    contact_email,
    contact_phone,
    companies_id,
    users_id
  ) {
    const query = `insert into posts_jobs (title,
      content,
      experience,
      contact_email,
      contact_phone,
      companies_id,
      users_id) values (
        '${title}',
        '${content}',
        '${experience}',
        '${contact_email}',
        '${contact_phone}',
       ${companies_id},
        ${users_id})`;
    try {
      const response = await db.result(query);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async getAllJobs() {
    const query = `select * from posts_jobs`;
    try {
      const response = await db.any(query);
      return response;
    } catch (err) {
      return err.message;
    }
  }
  static async getById(id) {
    const query = `SELECT * FROM posts_jobs INNER JOIN companies ON posts_jobs.companies_id = companies.id WHERE posts_jobs.id = ${id}`;
    try {
      const response = await db.one(query);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async getByCompanyId(companies_id) {
    const query = `select * from posts_jobs where companies_id=${companies_id}`;
    try {
      const response = await db.any(query);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async updateJob(
    title,
    content,
    experience,
    contact_email,
    contact_phone,
    id
  ) {
    const query = await db.any(
      `UPDATE posts_jobs SET title = $1, content = $2, experience = $3, contact_email = $4, contact_phone = $5 WHERE id = $6;`,
      [title, content, experience, contact_email, contact_phone, id]
    );
    try {
      return query;
    } catch (err) {
      return err.message;
    }
  }

  static async removeJob(id) {
    const query = await db.any(
      `UPDATE posts_jobs SET is_active = false WHERE id = $1;`,
      [id]
    );
    try {
      return query;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = JobPosts;
