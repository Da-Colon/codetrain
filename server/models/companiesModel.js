const db = require("./conn.js");

class Companies {
  constructor(id, email, name, company_url, company_logo_url, description) {
    this.id;
    this.email;
    this.name;
    this.company_url;
    this.company_logo_url;
    this.description;
  }

  static async getAllCompanies() {
    const query = `select * from companies`;
    try {
      const response = await db.any(query);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async getCompanyById(id) {
    // const query = (`select * from companies where id = $1`, [this.id]);
    const query = `select * from companies where id = ${id}`;
    try {
      const response = await db.any(query);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async addCompany(
    email,
    name,
    company_url,
    company_logo_url,
    description
  ) {
    const query = `insert into companies (email, name, company_url, company_logo_url, description) values ('${email}',
        '${name}',
        '${company_url}',
        '${company_logo_url}',
        '${description}')`;
    //   ($1, $2, $3, $4, $5)`,
    //   [
    //     this.email,
    //     this.name,
    //     this.company_url,
    //     this.company_logo_url,
    //     this.description
    //   ]);
    try {
      const response = await db.result(query);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async updateCompany(id, column, value) {
    const query = `update companies set ${column} = '${value}' where id = ${id}`;
    //   (`update companies set $1 = '$2' where id = $3`,
    //   [this.column, this.value, this.id]);
    try {
      const response = await db.result(query);
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Companies;
