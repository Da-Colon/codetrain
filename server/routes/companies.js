const express = require("express");
const router = express.Router();

const CompaniesModel = require("../models/companiesModel");

// Read all companies
router.get("/", async (req, res) => {
  const allCompanies = await CompaniesModel.getAllCompanies();
  res.json(allCompanies).status(200);
});

// Read company by id
router.get("/id/:id", async (req, res) => {
  const { id } = req.params;
  //   const companyInstance = new CompaniesModel(id);
  const company = await CompaniesModel.getCompanyById(id);
  res.json(company).status(200);
});

// Add company
router.post("/add", async (req, res) => {
  const { email, name, company_url, company_logo_url, description } = req.body;
  const response = await CompaniesModel.addCompany(
    email,
    name,
    company_url,
    company_logo_url,
    description
  );
  if (response.command === "INSERT" && response.rowCount >= 1) {
    res.sendStatus(200);
  } else {
    res.send("Could not add company").status(409);
  }
});

// Update company
router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { email, name, company_url, company_logo_url, description } = req.body;
  const response = await CompaniesModel.updateCompany(email, name, company_url, company_logo_url, description, id);
  res.json({ message: "Successfully Updated" }).status(200);
});

module.exports = router;
