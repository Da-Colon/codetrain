const db = require("./conn");
const bcrypt = require("bcryptjs");

class User {
  constructor(
    email,
    password,
    first_name,
    last_name,
    github_url,
    linkedin_url,
    user_type,
    bootcamp_name,
    personal_website,
    about,
    skills,
    companies_id
  ) {
    this.email = email;
    this.password = password;
    this.first_name = first_name;
    this.last_name = last_name;
    this.github_url = github_url;
    this.linkedin_url = linkedin_url;
    this.user_type = user_type;
    this.bootcamp_name = bootcamp_name;
    this.personal_website = personal_website;
    this.about = about;
    this.skills = skills;
    this.companies_id = companies_id;
  }

  //  BCrypt password compare
  async checkPassword(hashedPassword) {
    return await bcrypt.compareSync(this.password, hashedPassword);
  }

  async login() {
    return await db.one(`SELECT * FROM users WHERE email = $1`, [this.email]);
  }
  async signup() {
    return await db.result(
      `INSERT INTO users (email, password, first_name, last_name, github_url, linkedin_url, user_types_id, bootcamp_name, companies_id, auth) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9, true)`,
      [
        this.email,
        this.password,
        this.first_name,
        this.last_name,
        this.github_url,
        this.linkedin_url,
        this.user_type,
        this.bootcamp_name,
        this.companies_id
      ]
    );
  }

  static async getById(id) {
    const query = `SELECT id, email, first_name, last_name, personal_website, about, skills, github_url, linkedin_url, auth, user_types_id, bootcamp_name, companies_id FROM users WHERE id= ${id}`;
    try {
      const response = await db.one(query);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async updateBootcampUser(
    github_url,
    linkedin_url,
    personal_website,
    about,
    skills,
    id
  ) {
    const query = await db.any(
      `UPDATE users SET github_url = $1, linkedin_url = $2, personal_website = $3, about = $4, skills = $5 WHERE id = $6;`,
      [github_url, linkedin_url, personal_website, about, skills, id]
    );
    try {
      return query;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = User;
