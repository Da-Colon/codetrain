## Project title

CodeTrain
An online forum for coding bootcamp students to share learning resources and prospective employers to post their job listings and connect with students.

## Description

A community of coding bootcamp students and employers looking to hire new developers. Bootcamper students can share learning resources with each other and apply to job posts. Company representatives can list their job opprtunities here and connect with bootcampers.

## Motivation

There are many online resources to learn coding and find job listings, but none designed specifically for current and former coding bootcamp students. With the rising popularity of these bootcamps, we wanted to create a

## Challenges and Solutions

## Screenshots

Include logo/demo screenshot etc.

## Technology used

<b>Built with</b>
-React
Javascript library used to build the frontend client of the application. Primarily built with functional components and react hooks.

-Express and Node.js
Framework used to build the backend server of the application. Models and routes serve as an API for the client.

-PostgreSQL
SQL databases used for all data storage in the application. SQL quereis are used in the models for all CRUD operations. Tables in the DB store user info, resource posts, job listings, applications, messages,and reports.

-React-router
Navigational components used for all page routing throughout the website.

-Redux
Application state manager used to store the user data of logged in users and pass it to components throughout the application.

-Passport.js
Middleware used for user login authentication.

-Bulma/Bloomer
CSS framework used to style many components in the application.

-Styled-components
React component styling used to create custom unified styling throughout the application.

## Features

-Three different user roles (student, company, admin) with unique functionality and views for each.

-User account creation and logins with user authentication.

-Personal user and company profile pages to share user and contact information

-Board of learning resource posts and job listings with full create, read, update, and delete actions available.

-Bootcampers can apply to job listings. Company users can review applicants' qualifications and reject or accept them to go forward in the hiring process.

-User messaging and reporting system. Users can send and reply to messages from other users. Regular users can report issues to be resolved by admin users.

## Code Example

Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Installation

Clone or download the repository to your local machine. Install node modules with "npm install" in client and server folders. Run a development environment with the follow scripts:
-Client folder: "npm run start"
-Server folder: "npm run dev"

-Create/reset database with seed data: "npm run db:reset"

## Tests

Describe and show how to run the tests with code examples.

## How to use?

If people like your project they’ll want to learn how they can use it. To do so include step by step guide to use your project.

## Credits

Give proper credits. This could be a link to any repo which inspired you to build this project, any blogposts or links to people who contrbuted in this project.

#### Anything else that seems useful
