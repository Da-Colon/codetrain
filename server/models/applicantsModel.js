const db = require("./conn.js");

// display all applicants by post_jobs.id to help populate the /applications view for company user
class Applicants {
  constructor(
    jobId,
    applicantId,
    companyId,
    date_applied,
    firstName,
    lastName,
    email,
    skills,
    githubUrl,
    linkedinUrl,
    bootcampName,
    rejected,
    accepted
  ) {
    this.jobId;
    this.applicantId;
    this.companyId;
    this.date_applied;
    this.firstName;
    this.lastName;
    this.email;
    this.skills;
    this.githubUrl;
    this.linkedinUrl;
    this.bootcampName;
    this.rejected;
    this.accepted;
  }

  static async getAllApplicantsByJobId(jobId) {
    const query = `SELECT posts_jobs.id AS jobId, users.id AS applicantId, posts_jobs.companies_id AS companyId, job_applications.date_applied, users.first_name, users.last_name, users.email, users.skills, users.github_url, users.linkedin_url, users.bootcamp_name, job_applications.rejected, job_applications.accepted
    FROM posts_jobs INNER JOIN job_applications ON posts_jobs.id = job_applications.posts_jobs_id INNER JOIN users ON users.id = job_applications.users_id WHERE posts_jobs.id = ${jobId} ORDER BY users.id ASC, job_applications.date_applied ASC`;
    try {
      const response = await db.any(query);
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Applicants;
