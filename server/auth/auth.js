const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
// const JWTstrategy = require("passport-jwt").Strategy;

const bcrypt = require("bcryptjs");

const UserModel = require("../models/userModel");

// BCrypt password compare

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    async (username, password, done) => {
      try {
        const user = new UserModel(
          username,
          password,
          null,
          null,
          null,
          null,
          null,
          null
        );
        const response = await user.login();
        if (!user) {
          return done(null, false, { message: "User not found" });
        }
        // const isValid = user.checkPassword(password);
        // if (!isValid) {
        //   return done(null, false, { message: 'Wrong Password' });
        // }
        return done(null, response, { message: "Logged in Successfully" });
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  'signup',
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true
    },
    async (req, email, password, done) => {
      console.log("USER");
      try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const {
          first_name,
          last_name,
          github_url,
          linkedin_url,
          user_type,
          bootcamp_name
        } = req.body;

        const user = new UserModel(
          email,
          hash,
          first_name,
          last_name,
          github_url,
          linkedin_url,
          user_type,
          bootcamp_name
        );
        const response = await user.signup();
        return done(null, response);
      } catch (error) {
        done(error);
      }
    }
  )
);
