require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const empRoutes = require("./routes/add-user");
const empAttendance=require("./routes/emp-attendance");

const empAuthRoutes = require("./routes/auth-user");
const empLeave = require("./routes/leave")




var session = require('express-session')
const cookieParser = require("cookie-parser");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(session({
    secret:'secret123',
    saveUninitialized:true,
    resave:true,
    cookie:{
        httpOnly:true,
        maxAge:360000000
    }
}))

app.use((req,res,next)=>{
    console.log(req.session);
    next();
})

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/adduser", empRoutes);
app.use("/api/authuser", empAuthRoutes);

//Employee Routes
app.use("/api/attendance",empAttendance)
app.use("/api/leave",empLeave)

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
