const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const passport = require("passport")
const passportLocal = require("passport-local").Strategy
const cookieParser = require("cookie-parser")
const bcrypt = require("bcryptjs")
const session = require("express-session")
const app = express()
const fs = require("fs")
const User = require("./user")

mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.2gcse.mongodb.net/pretraga-firmi?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log("Mongoose Is Connected")
    }
)

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
)
app.use(
    session({
        secret: "secretcode",
        name: "sessionId",
        resave: true,
        saveUninitialized: true,
    })
)
app.use(cookieParser("secretcode"))
app.use(passport.initialize())
app.use(passport.session())
require("./auth")(passport)

// Routes
app.post("/login", async (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err
        if (!user) {
            res.status(200).json({
                status: false,
                result: "Wrong username or password.",
            })
        } else {
            req.logIn(user, (err) => {
                if (err) throw err
                res.status(200).json({
                    status: true,
                    result: "Successfully authenticated.",
                })
                console.log(req.user)
            })
        }
    })(req, res, next)
})

app.post("/register", (req, res) => {
    User.findOne({ username: req.body.username }, async (err, doc) => {
        if (err) throw err
        if (doc)
            res.status(200).json({
                status: false,
                result: "User Already Exists",
            })
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10)

            const newUser = new User({
                username: req.body.username,
                password: hashedPassword,
            })
            await newUser.save()
            res.status(200).json({
                status: true,
                result: "User created",
            })
        }
    })
})

app.get("/user", (req, res) => {
    res.send({
        users: req.user,
    })
})

//Json data

const delatnostiRaw = fs.readFileSync("./json/delatnosti.json")
const delatnosti = JSON.parse(delatnostiRaw)

const firmeRaw = fs.readFileSync("./json/firme.json")
const firme = JSON.parse(firmeRaw)

app.get("/delatnosti", (req, res) => {
    res.send(delatnosti)
})
app.get("/firme", (req, res) => {
    res.send(firme)
})

//Start server
app.listen(5000, () => {
    console.log("Server Has Started")
})
