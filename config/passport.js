const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const sequelize = require('sequelize');


// Load User model
const Admin = require('../model/Admin');

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user

      Admin.findOne({ where: { email: email } })
      // User.findOne({
      //   email: email
      // })
      .then(user => {
        if (!user) {
          return done(null, false, { message: 'That email is not registered' });
        }

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      });
    })
  );
  
passport.serializeUser((user, done)  =>{
  done(null, user.id);
});


  passport.deserializeUser((id, done, user, err) =>{
    //find by specific user id
    Admin.findByPk(id, (err, user))
      .then((user) =>{
        return done(null, user);
      })
      .catch(err =>{
        return done(err, null)
      })
    });
};
