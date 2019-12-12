const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const Filestore = require("session-file-store")(session);
const passport = require("passport");

require("dotenv").config();

// ROUTERS
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const resourceRouter = require("./routes/resourcePosts");
const jobApplicationsRouter = require("./routes/jobApplications");
const postsJobsRouter = require("./routes/postsJobs");
const companiesRouter = require("./routes/companies");

const corsOptions = {
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept"
};

const app = express();

app.use(compression());
app.use(helmet());
app.use(cors(corsOptions));

require("./auth/auth");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public/")));

// app.use(
//   session({
//     store: new Filestore(),
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     is_logged_in: false
//   })
// );

// User Routers
app.use("/", indexRouter);
app.use("/", usersRouter);
app.use("/resources", resourceRouter);
app.use("/job-applications", jobApplicationsRouter);
app.use("/posts/jobs", postsJobsRouter);
app.use("/companies", companiesRouter);

module.exports = app;
