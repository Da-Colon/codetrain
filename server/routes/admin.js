const express = require("express");
const router = express.Router();

const AdminModel = require("../models/adminModel");


// get all reports not resolved
router.get('/reports', async (req, res) =>{
  const getTheReports = await AdminModel.getReports();
  res.json(getTheReports).status(200)
})

// All Companies reports
router.get('/reports/all/companies', async (req, res) =>{
  const getTheReports = await AdminModel.getCompaniesReports();
  res.json(getTheReports).status(200)
})


// All USERS reports
router.get('/reports/all/users', async (req, res) =>{
  const getTheReports = await AdminModel.getUsersReports();
  res.json(getTheReports).status(200)
})


// All jobs reports
router.get('/reports/all/jobs', async (req, res) =>{
  const getTheReports = await AdminModel.getJobsReports();
  res.json(getTheReports).status(200)
})


// all resource reports
router.get('/reports/all/resources', async (req, res) =>{
  const getTheReports = await AdminModel.getResourcesReports();
  res.json(getTheReports).status(200)
})

// reports resolved

// get all reports resolved
router.get('/reports/resolved', async (req, res) =>{
  const getTheReports = await AdminModel.getResolvedReports();
  res.json(getTheReports).status(200)
})

// All Companies reports resolved
router.get('/reports/all/resolved/companies', async (req, res) =>{
  const getTheReports = await AdminModel.getResolvedCompaniesReports();
  res.json(getTheReports).status(200)
})


// All USERS reports resolved
router.get('/reports/all/resolved/users', async (req, res) =>{
  const getTheReports = await AdminModel.getResolvedUsersReports();
  res.json(getTheReports).status(200)
})


// All jobs reports resolved
router.get('/reports/all/resolved/jobs', async (req, res) =>{
  const getTheReports = await AdminModel.getResolvedJobsReports();
  res.json(getTheReports).status(200)
})


// all resource reports resolved
router.get('/reports/all/resolved/resources', async (req, res) =>{
  const getTheReports = await AdminModel.getResolvedResourcesReports();
  res.json(getTheReports).status(200)
})

// get single report
router.get('/report/:report_id', async (req, res) =>{
  const {report_id} = req.params;
  const report = await AdminModel.getSingleReport(report_id);
  res.json(report).status(200)
})

// get all reports about a user
router.get('/reports/:users_id', async (req, res) =>{
  const {users_id} = req.params;
  const userReports = await AdminModel.getAllUserReports(users_id);
  res.json(userReports).status(200)
})

// get all reports about a company
router.get('/reports/:companies_id', async (req, res) =>{
  const {companies_id} = req.params;
  const companyReports = await AdminModel.getAllCompanyResports(companies_id);
  res.json(companyReports).status(200)
})

// get all reports about a job posts
router.get('/reports/:posts_jobs_id', async (req, res) =>{
  const {posts_jobs_id} = req.params;
  const AllJobReports = await AdminModel.getAllJobReports(posts_jobs_id)
  res.json(AllJobReports).status(200)
})

// get all reports about a resource post
router.get('/reports/:resource_id', async (req, res) =>{
  const {resource_id} = req.params;
  const AllResourceReports = await AdminModel.getAllResourceReports(resource_id)
  res.json(AllResourceReports).status(200)
})

// delete/change auth of user
router.put('/reports/auth/user/:users_id', async (req, res) =>{
  const {users_id} = req.params;
  console.log("THIS", users_id)
  const authUser = await AdminModel.removeAuthUser(users_id)
  if (authUser.command === "UPDATE" && authUser.rowCount >= 1) {
    res.sendStatus(200);
  } else {
    res
      .send(`Could not update user auth status`)
      .status(409);
  }
});

// delete/change auth of all users of company
router.put('/reports/auth/company/:companies_id', async (req, res) =>{
  const {companies_id} = req.params;
  const AuthCompanyUsers = await AdminModel.removeAuthCompanyUsers(companies_id)
  if (authUser.command === "UPDATE" && authUser.rowCount >= 1) {
    res.sendStatus(200);
  } else {
    res
      .send(`Could not update job application status`)
      .status(409);
  }
})

// post message to reported user
router.post('/reports/send', async (req, res) =>{
  
  const {subject, message, sent_from, sent_to } = req.body
  const sendMessage = await MessagesModel.sendMessageUser(subject, message, sent_from, sent_to)
  res.status(200).end()
})

// post message message all users of a reported company
router.post("/reports/send/company", async (req, res) => {
  const {subject, message, sent_from, companies_id} = req.body
  const sendMessage = await AdminModel.sendMessageCompany(subject, message, sent_from, companies_id)
  res.status(200).end()
})

// post report
router.post('/reports/newreport', async (req, res) =>{
  const {users_id, posts_jobs_id, companies_id, resource_id, reason, submited_by} = req.body
  console.log(req.body)
  const saveReport = await AdminModel.postReport(users_id, posts_jobs_id, companies_id, resource_id, submited_by, reason)
  res.status(200).end()
})

// delete post resource
router.delete('/reports/delete/:resource_id', async (req, res) =>{
  const {resource_id} = req.params;
  const deleteResource = await AdminModel.deleteResource(resource_id);
  res.status(200).end()
})

// delete post job
router.delete('/reports/delete/:posts_jobs_id', async (req, res) =>{
  const {posts_jobs_id} = req.params;
  const deleteJob = await AdminModel.deleteJob(posts_jobs_id);
  res.status(200).end()
})

// resolveIssue
router.post('/reports/resolve/:report_id', async (req, res) =>{
  const {report_id} = req.params;
  const updateResolve = await AdminModel.resolveIssue(report_id);
  res.status(200).end()
})


// // search user
// router.get('/reports/allusers', async (req, res) =>{

// })

// // search company
// router.get('/reports/allcompanies', async (req, res) =>{

// })

module.exports = router;