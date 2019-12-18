const express = require("express");
const router = express.Router();
const passport = require("passport");
const userModel = require("../models/userModel");

/* GET users listing. */
router.post("/login", function(req, res, next) {
  passport.authenticate("login", async (err, user) => {
    try {
      if (err || !user) {
        const error = new Error("An Error Occured");
        return next(error);
      }
      req.login(user, { session: false }, async error => {
        if (error) return next(error);
        return res.status(200).json({ user });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  async (req, res, next) => {
    res.status(200).json({ message: "signup successful" });
  }
);

router.get("/logout", function(req, res, next) {
  res.send("respond with a resource");
});

// Update bootcamp user
router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const {
    github_url,
    linkedin_url,
    personal_website,
    about,
    skills,
    profile_pic_url
  } = req.body;

  const response = await userModel.updateBootcampUser(
    github_url,
    linkedin_url,
    personal_website,
    about,
    skills,
    id
  );
  res.json({ message: "Successfully Updated" }).status(200);
});

module.exports = router;
