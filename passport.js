const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, 
function (email, password, cb) {
    console.log("INSIDE PASSPORT SEPRATE FILE")
    const user = {email:"bhatraprerna@gmail.com" }
    return cb(null, user, {message: 'Logged In Successfully'});
}
));
