const db = require('./conn');
const bcrypt = require('bcryptjs');

class User {
  constructor(email, password, first_name, last_name, github_url, linkedin_url, user_type, bootcamp_name) {
    this.email = email;
    this.password = password;
    this.first_name = first_name;
    this.last_name = last_name;
    this.github_url = github_url;
    this.linkedin_url = linkedin_url;
    this.user_type = user_type;
    this.bootcamp_name = bootcamp_name;
  }

   // BCrypt password compare
//   checkPassword(hashedPassword) {
//     return bcrypt.compareSync(this.password, hashedPassword);
// }

  async login () {
    return await db.one(`SELECT * FROM users WHERE email = $1`, [this.email]);
  } 
}

module.exports = User;


