const express = require('express');
const router = express.Router();
const passport = require('passport')



/* GET users listing. */
router.get('/login', function(req, res, next) {
  passport.authenticate('login', async (err, user) => {
    try{
      if (err || !user) {
        const error = new Error("An Error Occured");
        return next(error);
      }
      req.login(user, { session: false }, async error => {
        if (error) return next(error);
        return res.status(200).json({user});
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});


router.get('/signup', function(req, res, next) {

  res.send('respond with a resource');

});

router.get('/logout', function(req, res, next) {

  res.send('respond with a resource');
});



module.exports = router;
