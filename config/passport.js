const passport = require("passport");
const { Strategy } = require("passport-google-oauth2");

passport.use(new Strategy(
    {
        clientID: "278050253103-dav3lkghksgat1njmn64aoldbqvkm3b4.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "https://skdjhskuhsr.herokuapp.com/api/v1/auth/google",
        passReqToCallback: true
    },
    (request, accessToken, refreshToken, profile, done) => {
        return done(null, profile)
    },
    passport.serializeUser((user, done) => {
        done(null, user);
    }),
    passport.deserializeUser((user, done) => {
        done(null, user);
    })
))