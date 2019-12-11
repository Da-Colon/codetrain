const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
// const JWTstrategy = require("passport-jwt").Strategy;



const UserModel = require("../models/userModel");

 // BCrypt password compare


passport.use('login',
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
          return done(null, false, { message: 'User not found' });
        }
        // const isValid = user.checkPassword(password);
        // if (!isValid) {
        //   return done(null, false, { message: 'Wrong Password' });
        // }
        return done(null, response, { message: 'Logged in Successfully' });
      } catch (error) {
        return done(error);
      }
    }));
