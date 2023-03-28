const bodyParser = require("body-parser");
const expressServer = require("express");
const passport =  require("passport");
const jwt = require("jsonwebtoken")
require('./passport');
const app = expressServer();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
   
app.get("/",  (req, res)=>{
    res.send("hello world")
})


app.post('/login', function (req, res, next) {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        console.log("USER====>",{user , err})
        if (err || !user) {
            return res.status(400).json({
                message: 'Something is not right',
                user   : user
            });
        }
       req.login(user, {session: false}, (err) => {
           if (err) {
               res.send(err);
           }
           const token = jwt.sign(user, 'your_jwt_secret');
           return res.json({user, token});
        });
    })(req, res);
});


app.listen(3000, () => console.log('Example app is listening on port 3000.'));


