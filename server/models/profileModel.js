const db = require("./conn");

class Profile {
  constructor(
    email,
    password,
    first_name,
    last_name,
    github_url,
    linkedin_url,
    user_type,
    bootcamp_name
  ) {
    this.email = email;
    this.password = password;
    this.first_name = first_name;
    this.last_name = last_name;
    this.github_url = github_url;
    this.linkedin_url = linkedin_url;
    this.user_type = user_type;
    this.bootcamp_name = bootcamp_name;
  }

  static async getById(id) {
    const query = `select email, first_name, last_name, github_url, linkedin_url, bootcamp_name from users where id= ${id}`;
    try {
      const response = await db.one(query);
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Profile;
