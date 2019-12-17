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
      const response = await db.one(query);
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

  static async updateCompany(
    email,
    name,
    company_url,
    company_logo_url,
    description,
    id
  ) {
    const query = await db.any(
      `UPDATE companies SET email = $1, name = $2, company_url = $3, company_logo_url = $4, description = $5 WHERE id = $6;`,
      [email, name, company_url, company_logo_url, description, id]
    );
    try {
      return query;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Companies;
