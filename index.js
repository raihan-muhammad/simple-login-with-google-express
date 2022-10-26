const express = require("express");
const app = express();
const passport = require("passport");
const expressSession = require("express-session");
require("./config/passport");
require("dotenv").config();

console.log(process.env.PASSPORT_CLIENT_ID);
console.log(process.env.PASSPORT_CLIENT_SECRET);

app.use(expressSession({ resave: false, saveUninitialized: true, secret: "bebas mau di isi"}))
app.use(passport.initialize());
app.use(passport.session());

app.get("/api/v1/auth/google", passport.authenticate("google", {
    scope: ["email", "profile"],
    successRedirect: "/api/v1/auth/protected",
    failureRedirect: "/api/v1/auth/fail"
}))

app.get("/api/v1/auth/protected", (req, res) => {
    console.log(req.user)
    res.redirect(`http://localhost:3000`)
})

app.listen(8000, () => {
    console.log("server running on port 8000");
})