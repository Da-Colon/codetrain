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
const messageRouter = require("./routes/messages")
const adminRouter = require("./routes/admin")
const resourceRouter = require("./routes/resourcePosts");
const jobApplicationsRouter = require("./routes/jobApplications");
const postsJobsRouter = require("./routes/postsJobs");
const companiesRouter = require("./routes/companies");
const profilesRouter = require("./routes/profiles");
const applicantsRouter = require('./routes/applicantsRoute')

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


app.use("/", indexRouter);
app.use("/", usersRouter);
app.use("/", messageRouter);
app.use("/", adminRouter);
app.use("/resources", resourceRouter);
app.use("/job-applications", jobApplicationsRouter);
app.use("/posts/jobs", postsJobsRouter);
app.use("/companies", companiesRouter);
app.use("/profiles", profilesRouter);
app.use("/api/applicants", applicantsRouter);
module.exports = app;
