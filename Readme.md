<section style= "background:black;padding:2rem; ">
            <div>
            <h1> Create a Register (Sing Up ) and Login page: </h1>
<h3> Front End  + Nodejs + Express + MongoDB </h3>
<h5>Install Below Packages: </h5>
                <h1 style="text-align: center;background:red;">First Step:</h1> 
                <ol>
                    <li> express ExamDB --view=ejs </li>
                    <li> cd ExamDB </li>
                    <li> node i  /   npm i </li>
                </ol>   
            </div>
             <div>
                <h1 style="text-align: center;background:red;">Second Step:</h1>
                <ol>
                    <li>Mongoosh -  npm i mongoose</li>
                    <li>Express Session - npm i express-session</li>
                    <li>Passport - npm i passport</li>
                    <li> Passport Local - npm i passport-local</li>
                    <li>passport Local Mongoose - npm i passport-local-mongoose</li>
                    <li> Combine Set Up Install Below :</li>
                    <li>
                    npm i passport  passport-local passport-local-mongoose
                    </li>
                </ol>
            </div>
                 <div>
                     <h1 style="text-align: center;background:red;">SetUp In App.js :</h1>
                <ol>
                    <li>  
                     <span>Require And Set up Session: </span><br>  
                    <code>app.use(session({
                        resave:false, // do not save session if unmodified  <br>
                        saveUninitialized: false, // do not create session until something 
                        <br> secret:'secret' // used to sign the session ID cookie
})) </code>
                    </li>
                    <li><span> Require passport && Initialize passport middleware: </span>
                      <code>
                     <br>   app.use(passport.initialize()); // Initialize passport middleware
                     <br>   app.use(passport.session());// Initialize session middleware
                     <br>   passport.serializeUser(usersRouter, passport.serializeUser()) // Serialize user handles the login              (salt)         process
                     <br>   passport.deserializeUser(usersRouter, passport.deserializeUser())// Deserialize user increases (hash) security
                      </code>
                    </li>
                    <li></li>
                </ol>
            </div>
             <div>
            <h1 style="text-align: center;background:red;">Setup in  user.js (Routes folder)</h1>
                <ol>
                    <li> const mongoose = require('mongoose')</li>
                    <li> const plm  = require('passport-local-monoose')</li>
                    <li>mongoose.connect('mongodb://127.0.0.1.27017/passport')</li>
                    <li> Create Schema <br>
                        const userSchema = new mongoose.Schema({
                            username:{
                                type:String,
                                require:True,
                                unique:True
                            },
                            password:{
                                type:String,
                                unique:True
                            }
                        })                   
                     </li>
                    <li>
                        userSchema.plugin(plm)
                    </li>
                    <li>
                        module.export = mongoose.model('Demo',userSchema)
                    </li>
                </ol>
            </div>
 <div>
        <h1 style="text-align: center;background:red;">Setup in index.js (Routes folder):</h1>
                <ol>
                    <li>var express = require('express')</li>
                    <li> var router = express.Router() </li>
                    <li> const userModel = require('./users')</li>
                     <li> const pl ( localStrategy ) = require('passport-local')</li>
                    <li>const passport = reqquire('passport')</li>
                    <li>passport.use(new pl(userModel.authenticate()))</li>
                      <br>
                    <li> 
                    <code>
                    router.get('/',fuunction(req,res) { 
                      <br>  res.render('index'); <br>
                    }  );
                    </code>
                    </li>
                      <br>
                    <li>
                        create a Register Router page <br>
                        <code>
                            router.post('/register',fuunction(req,res){
                                let data  = new userModel({
                                    username:req.body.username
                                })
                                userModel.register(data,req.body.password).then(fuunction(registereduser){
                                    passport.authenticate('local'(req,res,fuunction(){
                                        res.redirect('/profle')
                                    })
                                })
                            })
                        </code>
                    </li>
                      <br>
                    <li>
                        create a Profile Page <br>
                        <code>
                            router.get('/profile',isLoggedIn,fuunction(req,res){
                                res.send("Welcome back Express Data Base")
                            })
                        </code>
                    </li>
                      <br>
                    <li>
                        create a Login Page <be>
                        <code>
            router.post('/login',passport,authenticate('local',{
                successRedirect:"/profile",
                failureRedirect:"/"
            }))
                        </code>
                    </li>
                      <br>
                    <li>
                        Create a Middleware  <br>
                        <code>
                        fuunction isLoggedIn(req,res,next){
                            if(req.isAuthenticated()){
                                return next();
                            }
                            res.redirect('/')
                        })
                        </code>
                    </li>
                      <br>
                    <li>
                    <code>module.exports = router;</code>
                    </li>
                    <br>
                </ol>
            </div>

</section>

<!--
 <div>
                     <h1 style="text-align: center;background:red;">First Step:</h1>
                <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            </div> -->
<!--<section style= "background:black; ">
            <div>
                <h1 style="text-align: center;background:red;">First Step:</h1>
                <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            </div>
</section> -->
