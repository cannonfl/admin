'use strict';
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const Users = mongoose.model('users');

/*new Users({
  googleId: 'yoyoyo',
  firstName: 'Frank',
  lastName: 'Cannon'
}).save();*/

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClient_id,
      clientSecret: keys.googleClient_secret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      //console.log('access token', accessToken);
      //console.log('refresh token', refreshToken);
      //console.log('profile', profile);
      let {id, name, emails, gender, provider} = profile;
      let docRec = {
        provider,
        id,
        firstName: name.givenName,
        lastName: name.familyName,
        gender,
        email: emails[0].value
      }
      console.log(docRec);
      new Users(docRec).save();
    }
  )
);
