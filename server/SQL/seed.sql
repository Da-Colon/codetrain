-- COMPANIES
INSERT INTO companies (
  email, name, company_url, company_logo_url, description
) VALUES (
  'google@google.com', 
  'Google',
  'https://google.com',
  'https://2.bp.blogspot.com/-tRdfCkaPO0A/Ui-PRJLDZlI/AAAAAAABMI8/8L9maIUroq8/s640/google-new-logo.png',
  'Mollit ipsum ut labore magna consequat dolore. Duis ipsum dolore ipsum consectetur ipsum elit nisi veniam. Consectetur occaecat culpa enim ea. Id id eiusmod deserunt cupidatat. Mollit labore officia magna tempor.'
), 
(
  'gradpad@gmail.com', 
  'GradPad', 
  'https://google.com',
  'https://2.bp.blogspot.com/-tRdfCkaPO0A/Ui-PRJLDZlI/AAAAAAABMI8/8L9maIUroq8/s640/google-new-logo.png',
'Mollit ipsum ut labore magna consequat dolore. Duis ipsum dolore ipsum consectetur ipsum elit nisi veniam. Consectetur occaecat culpa enim ea. Id id eiusmod deserunt cupidatat. Mollit labore officia magna tempor.'
),
(
  'sideqik@gmail.com', 
  'SideQik',
  'https://google.com',
  'https://2.bp.blogspot.com/-tRdfCkaPO0A/Ui-PRJLDZlI/AAAAAAABMI8/8L9maIUroq8/s640/google-new-logo.png',
'Mollit ipsum ut labore magna consequat dolore. Duis ipsum dolore ipsum consectetur ipsum elit nisi veniam. Consectetur occaecat culpa enim ea. Id id eiusmod deserunt cupidatat. Mollit labore officia magna tempor.'
);

-- USERS
INSERT INTO users (
  email,
  password,
  first_name,
  last_name,
  personal_website,
  about,
  skills,
  github_url,
  linkedin_url,
  auth,
  user_types_id,
  bootcamp_name,
  companies_id
) VALUES ( -- BOOTCAMP USERS
  'dcapples@gmail.com',
  'test',
  'David',
  'Colon',
  'https://davidacolon.com/',
  'For the past 11 years I have been working to make a career in the restaurant industry as a chef. I recently decided to pivot and dive headfirst into the world of programming. I could not have made a better decision to attend DigitalCrafts Full Stack Bootcamp with each "ah-hah" moment that I get and every technical document I read, I am hungry to learn more of what these amazing languages can do and push my skills to the limit.

I have a wonderful wife, who has been there to support me through this career transition. We have been together for 7 years and we recently got married in September of 2019. We have a fantastic dog, Odin, who we rescued at 8 weeks old. In my free time (when I am not plastered in front of my computer figuring out a new bug), I enjoy spending time with my family going on walks and hiking. I slso enjoy playing video games and watching the lastest Marvel movie or shows such as Silcon Valley (I understand when they have problems from merge conflicts now).

I am more passionate than I have ever been in my life to continue to learn new skills and languages and achieving all of my career goals. While I do plan to focus on my current Stack and continue to improve, in the future I would like to learn more about lower level languages, data architecture, and game design.',
  '{Javascript, HTML5, CSS3, postgreSQL, React, Python, jQuery}',
  'github.com/Da-Colon',
  'https://www.linkedin.com/in/david-colon-600994124/',
  TRUE,
  2,
  'Digital Crafts',
  NULL
),
(
  'dbananas@gmail.com',
  'test',
  'Daniel',
  'Farlow',
  'https://daniel-farlow.com/',
  '
Hi, I''m Daniel.

I am a software engineer living in Atlanta, GA. I am originally from Frederick, MD, and I attended Davidson College where I majored in mathematics. Soon after graduating I started my career as a math instructor, first teaching at Barrie School in Silver Spring, MD, then at The Hotchkiss School in Lakeville, CT, and finally at St. Andrew''s Episcopal School in Ridgeland, MS. After a number of years in education, I realized I was hungry for a new challenge, and software engineering stood out to me as a field ripe with the kinds of challenges I was looking for.

The first challenge was in finding a way to pursue this beautiful discipline but to do so not in a vaccuum but with a community of like-minded peers eager to engage new challenges and solve difficult problems. My search led me to DigitalCrafts, a four month full-time immersive coding bootcamp that I began in August of 2019 and will finish in December.',
   '{Javascript, HTML5, CSS3, postgreSQL, React, Python, jQuery}',
  'https://github.com/daniel-farlow',
  'https://www.linkedin.com/in/daniel-farlow/',
  TRUE,
  2,
  'General Assembly',
  NULL
),
(
  'prescottsun@gmail.com',
  'test',
  'Prescott',
  'Sun',
  'https://prescottsun.github.io/portfolio/',
  '
  A lifelong computer and tech enthusiast. I graduated from the University of Connecticut with a Bachelor of Science in mechanical engineering. I moved to Atlanta for my first job out of school, working as a business intelligence analyst. At school and work, I always found the times when I was trying to solve problems and complete tasks through programming to be the most interesting. I was always the most enthusiastic when I programmed a script to solve math problems in Matlab, created macros in Visual Basic to automate tasks in Excel, or used SQL queries for financial data analysis. That interest has grown into a passion that I am seeking to turn into a full-time career.',
   '{JavaScript, CSS, HTML, Angular, React, Regular Expressions}',
  'https://github.com/prescottsun',
  'https://www.linkedin.com/in/prescott-sun/',
  TRUE,
  2,
  'General Assembly',
  NULL
),
(
  'nocarrots@gmail.com',
  'test',
  'Nep',
  'Orshiso',
  'https://neporshiso.com/',
  'My name is Nep Orshiso and I’m from Kansas City, MO. I’m an Ethiopian-American and I’ve lived in the Midwest most of my life. I have a B.S. in Finance and Marketing and a minor in Economics from Truman State University.

I moved to Atlanta, GA in August 2019 to join the DigitalCrafts Full-Time Immersive Program to make the transition into software development. Previously, I worked at a large retirement services provider as a junior manager in their call center.',
  '{Javascript, HTML5, CSS3, Bulma, Boomer}',
  'https://github.com/neporshiso',
  'https://www.linkedin.com/in/neporshiso/',
  TRUE,
  2,
  'Thinkful',
  NULL

), -- COMPANY USERS
(
  'hrdave@google.com',
  'test',
  'Dave',
  'Strickland',
  NULL,
  NULL,
  NULL,
  NULL,
  'https://www.linkedin.com/in/david-colon-600994124/',
  TRUE,
  3,
  NULL,
  3
),
(
  'hmnep@gmail.com',
  'test',
  'Nep',
  'Mchammersmith',
  NULL,
  NULL,
  NULL,
  NULL,
  'https://www.linkedin.com/in/david-colon-600994124/',
  TRUE,
  3,
  NULL,
  3
),
(
  'prescottceo@gmail.com',
  'test',
  'Prescott',
  'Gundy',
  NULL,
  NULL,
  NULL,
  NULL,
  'https://www.linkedin.com/in/david-colon-600994124/',
  TRUE,
  3,
  NULL,
  2
), -- Not Authorized Users
(
  'neppers@gmail.com',
  'test',
  'Nep',
  'Peppers',
  NULL,
  NULL,
  '{Javascript, HTML5, CSS3, postgreSQL, React, Python, jQuery}',
  'github.com/Da-Colon',
  'https://www.linkedin.com/in/david-colon-600994124/',
  FALSE,
  2,
  'Digital Crafts',
  NULL
),
(
  'dannybeans@gmail.com',
  'test',
  'Daniel',
  'Beans',
  NULL,
  NULL,
   '{Javascript, HTML5, CSS3, postgreSQL, React, Python, jQuery}',
  'github.com/Da-Colon',
  'https://www.linkedin.com/in/david-colon-600994124/',
  FALSE,
  2,
  'Digital Crafts',
  NULL
),
(
  'Prestonsmithson@gmail.com',
  'test',
  'Preston',
  'Smithson',
  NULL,
  NULL,
  NULL,
  NULL,
  'https://www.linkedin.com/in/david-colon-600994124/',
  FALSE,
  3,
  NULL,
  3
), -- ADMIN USERS
(
  'david@gmail.com',
  'test',
  'David',
  'C',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  TRUE,
  1,
  NULL,
  NULL
),
(
  'Daniel@gmail.com',
  'test',
  'Daniel',
  'C',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  TRUE,
  1,
  NULL,
  NULL
),
(
  'nep@gmail.com',
  'test',
  'Nep',
  'O',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  TRUE,
  1,
  NULL,
  NULL
),
(
  'prescott@gmail.com',
  'test',
  'Prescott',
  'C',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  TRUE,
  1,
  NULL,
  NULL
);

-- POSTED RESOURCES

INSERT INTO posts_resources (
  title, 
  categories, 
  short_description, 
  full_description, 
  resource_url,
  users_id
) VALUES 
(
  'PostgreSQL Tutorial',
  '{Tutorial, Reference, Backend, Database}',
  'This PostgreSQL tutorial aims to help you understand PostgreSQL quickly through many practical examples. Numerous problems are given, and, more importantly, solutions are sketched.',
  'The aim of this resource is to help you get up and running with PostgreSQL as quickly as possible by means of problems and solutions. If you are looking to learn PostgreSQL fast and easily, develop applications using PostgreSQL as the back-end database management system, or migrating from other database management systems such as MySQL, Oracle, Microsoft SQL Server to PostgreSQL, then this resource is for you!
  
  First, you will learn how to query data from a single table using basic data selection techniques such as selecting columns, sorting result set, and filtering rows. Then, you will learn about the advanced queries such as joining multiple tables, using set operations, and constructing the subquery. Finally, you will learn how to manage database tables such as creating new a table or modifying an existing table’s structure.
  ',
  'http://www.postgresqltutorial.com/',
  1
),
(
  'Stack Overflow',
  '{Forum, General, Development}',
  'Stack Overflow is a question and answer site for professional and enthusiast programmers. It is basically where you will need to go to get answers to most of your developer-related questions. Stack Overflow is a question and answer site for professional and enthusiast programmers.',
  'The website serves as a platform for users to ask and answer questions, and, through membership and active participation, to vote questions and answers up or down and edit questions and answers in a fashion similar to a wiki or Reddit. Users of Stack Overflow can earn reputation points and "badges"; for example, a person is awarded 10 reputation points for receiving an "up" vote on an answer given to a question and 10 points for the "up" vote of a question, and can receive badges for their valued contributions, which represents a kind of gamification of the traditional Q&A site. Users unlock new privileges with an increase in reputation like the ability to vote, comment, and even edit other people''s posts.
  
  Closing questions is a main differentiation from Yahoo! Answers and a way to prevent low quality questions. The mechanism was overhauled in 2013; questions edited after being put "on hold" now appear in a review queue. Jeff Atwood stated in 2010 that duplicate questions are not seen as a problem but rather they constitute an advantage if such additional questions drive extra traffic to the site by multiplying relevant keyword hits in search engines.

  As of January 2019 Stack Overflow has over 10 million registered users, and it exceeded 16 million questions in mid 2018. Based on the type of tags assigned to questions, the top eight most discussed topics on the site are: JavaScript, Java, C#, PHP, Android, Python, jQuery and HTML.

  Stack Overflow also has a Jobs section to assist developers in finding their next opportunity. For employers, Stack Overflow provides tools to brand their business, advertise their openings on the site, and source candidates from Stack Overflow''s database of developers who are open to being contacted.
  ',
  'https://stackoverflow.com/',
  4
),
(
  'Flexbox Froggy',
  '{Tutorial, Game, CSS, Flexbox}',
  'Flexbox Froggy is a game where you help Froggy and friends get to their lilypads by writing CSS code that utilizes the flexible box model in CSS (i.e., "flexbox").',
  'This game will help you become familiar with the basics of the CSS flexible box model (i.e., "flexbox") by means of a fun game. You will learn how to utilize a variety of the flexbox properties and values: justify-content, align-items, flex-direction, order, align-self, flex-wrap, flex-flow, align-content, and others you may find helpful.',
  'http://flexboxfroggy.com/',
  2
),
(
  'Flexbox Froggy Guide',
  '{Guide, Reference, CSS, Flexbox}',
  'This guide is meant to make the experience of completing the Flexbox Froggy game as beneficial as possible with detailed solutions (with pictures and code) to each level.',
  'You will find quite a few resources in this guide! First you will see an in-depth introduction detailing how the guide is intended to be used. You will then see different flexbox properties and values you will need to complete the different challenges (these are meant to be referenced throughout your completion of the game if need be). 
  
  The true utility of the guide then comes apparent with links to all of the different levels you can expect to currently see in Flexbox Froggy. For each level, you are greeted by a picture of how the level starts, a possible hint if you are stuck, the code provided at the start of the level that you need to fill in, and then a full solution with the code filled in along with pictures representing each step.',
  'https://github.com/daniel-farlow/flexbox-froggy',
  3
),
(
  'CSS Diner',
  '{CSS, Game}',
  'CSS Diner is a game where you practice correctly selecting specific elements for use in CSS stylesheets. Understanding how to target specific elements in your HTML will also help you to traverse DOM elements when you get to JavaScript.',
  'In this game you will be greeted with animated/wiggling items on a table, and your job is to select these items using CSS selectors. You are given the HTML for the table setup to guide you in targeting the appropriate elements. 
  
  You will learn how to select elements by type, ID, descendant, class, etc. It''s not a bad idea to first get a handle on how the game works and read the description of each selector intended to be used on each level in the right panel of the game, but ideally you will be able to complete all levels without reference to any selectors.',
  'https://flukeout.github.io/',
  4
),
(
  'CSS Diner Guide',
  '{Guide, Reference, CSS}',
  'This guide is meant to accompany the popular "CSS Diner" game inteneded to help you improve how you use CSS selectors in your stylesheets. Complete with descriptions and examples of all the selectors used as well as hints and solutions for each level of the CSS diner game.',
  'This guide starts with an introduction to the game as well as instructions on how to use the guide. Most importantly, you will first be greeted by links to each level of the game if you are eager to see how a certain level''s solution is worked out. Beneath these links you will see links to descriptions and examples of the different CSS selectors used throughout the game. These descriptions will likely be useful to reference throughout the game as well as possibly in the future when doing your own custom styling. 
  
  When you get to the "levels section" you will be greeted by a variety of things. First, you will see a collapsible "HTML Viewer" which gives you the HTML for the animation immediately below. The provided HTML is what you need to use in order to determine what CSS selector(s) is/are appropriate. Directly under each animation you will see a hint specific to that level''s animation. The hint will generally point you to possibly using a certain selector or combination of selectors (you will also see beside the hint a link to the selector reference section). Finally, you will see the collapsible "CSS Viewer" item which contains one possible solution. It''s important to keep in mind that there will often be numerous possible solutions to a particular level. Your job is to simply get decent exposure to all the different selectors available to you.',
  'https://github.com/daniel-farlow/css-diner',
  1
),
(
  'VSCode Keyboard Shortcuts',
  '{IDE, Reference, Shortcuts}',
  'Ever feel like you are not getting the most out of your code editor? If you use VSCode, then this guide is for you! VSCode has a ton of keyboard shortcuts, some extremely useful (like being able to immediately copy a line or several lines of code up and down) and others not so much (how often do you need to rename a symbol?). This guide, for Mac and Windows, is intended to make your life easier in sorting through what will make your life easier.',
  'Have you ever looked at the list of all keyboard shortcuts for your code editor? If you have, even if you do not use VSCode, then you likely were overwhelmed. It can be difficult to discern what shortcuts are actually useful when looking at so many at once. So how does this guide help?
  
  This guide aims to make it easier for you to explore what keyboard shortcuts there are and which ones might be suitable for your use. The beginning of this guide includes links to the shortcuts provided in VSCode''s own documentation, but those are strictly for reference in case someone wants to look at them (after all, we are trying to make those documents more accessible!). Directly below the description of the guide are links to two markdown files containing reference to all keyboard shortcuts in both MacOS and Windows. The references are such that you can tell what category a keyboard shortuct will be relevant in (e.g., debugging) as well as a description of what the keyboard shortcut does. A collapsible item is provided so that you can click on it to see what keyboard shortcut performs the desired effect.
  
  Lastly, you will see a table of some of the shortcuts I use on a daily basis. Some of these you may already use, but some of these you will want to know exist!',
  'https://github.com/daniel-farlow/VSCode-Keyboard-Shortcuts',
  2
),
(
  'Deploying on AWS',
  '{Guide, Deployment, Tutorial}',
  'Confused by how to deploy a website on AWS? This guide will walk you through deploying a static site on AWS as well as a dynamic site if you are using Postgres, Node, and Express.',
  'This guide is meant to help you in setting up an EC2 instance on Amazon Web Services (AWS) and subsequently deploying your site(s) on your EC2 instance. You will see a variety of steps you need to take in order to do this (the process will necessarily be more involved if you are trying to deploy a dynamic site as opposed to a static site). 
  
  Here is a very brief overall description of the steps outlined in this guide (detailed instructions are included for each step, including numerous pictures and code samples!): create an AWS account, pick your server type, launch an EC2 instance, edit your security groups for your EC2 instance, create an SSH key, connect your instance, create an alias for quick access to your AWS EC2 instance, install Ubuntu''s advanced packaging tool (APT), install Nginx and Git on your EC2 instance, install Node (along with NVM and NPM), create an SSH key on GitHub to connect AWS with your GitHub files, install PostgreSQL, install PM2, point your domain name to your AWS IP address, tell Nginx about your server, and finally get an SSL certificate from Certbot. 
  
  As you can tell by the "brief description" above, there are quite a few steps involved! This guide should make it much easier for you to get through this process in a seamless fashion.',
  'https://github.com/daniel-farlow/deploying-on-aws',
  3
),
(
  'Small Group Projects - Tips for Success',
  '{Blog, Productivity, Teams, Work}',
  'When you''re in a coding bootcamp, you''ll most likely find yourself working in a team at some point. You may be someone who would rather work alone but the reality is that software development in a professional setting is usually done in teams. This blog post details my experience in working on a small group project during my time at the DigitalCrafts coding bootcamp.',
  'Working with others is an important skill and I wanted to share some of the things I''ve encountered from my undergraduate days and my current involvement in the DigitalCrafts bootcamp that led to a pleasant group project experience. My blog post articulates how any group that works well will necessarily have the following characteristics: agreement on the end goal, open communication, and mutual respect. After elaborating on each of these characteristics, I go into detail about the different phases often involved in projects (i.e., brainstorming, working and building, and presenting) and how to navigate them.
  
  Read the blog post to find out more!',
  'https://blog.neporshiso.com/small-group-projects/',
  1
),
(
  'freeCodeCamp',
  '{Free, Tutorial, Reference, Learning, Education}',
  'freeCodeCamp is a non-profit organization that consists of an interactive learning web platform, an online community forum, chat rooms, online publications and local organizations that intend to make learning web development accessible to anyone. Beginning with tutorials that introduce students to HTML, CSS and JavaScript, students progress to project assignments that they must complete either alone or in pairs. Upon completion of all project tasks, students are partnered with other nonprofits to build web applications, giving the students practical development experience.',
  'It is hard to overstate just how useful this resource really is. You can work towards getting a certificate in one of the following six areas by completing all of the lessons as well as the subsequent mostly free-form projects (as of this writing): responsive web design (basic HTML and HTML5, basic CSS, applied visual design, applied accessibility, responsive web design principles, CSS flexbox, CSS grid), JavaScript algorithms and data structures (basic JavaScript, ES6, regular expressions, debugging, basic data structures, basic algorithm scripting, object-oriented programming, functional programming, and intermediate algorithm scripting), front-end libraries (Bootstrap, jQuery, Sass, React, Redux, and React and Redux), data visualization (using D3, JSON APIs and Ajax), APIs and microservices (managing packages with NPM, basic node and express, MongoDB and Mongoose), and information security and quality assurance (using HelmetJS, testing with Chai, and advanced Node and Express).
  
  One may very well argue that the distinctive advantage freeCodeCamp has over other coding sites is that freeCodeCamp has not only free lessons but also projects that are really meant to test your understanding from the lessons and beyond.',
  'https://www.freecodecamp.org/',
  1
),
(
  'Codecademy',
  '{Free, Premium, Quizzes, Tutorial, Reference, Learning, Education}',
  'Codecademy is an online interactive platform that offers free coding classes in 12 different programming languages including Python, Java, JavaScript (jQuery, AngularJS, React.js), Ruby, SQL, C++, and Sass, as well as markup languages HTML and CSS. The site also offers a paid "pro" option that gives users access to personalized learning plans, quizzes, realistic projects, and live help from advisors.',
  'This is a decent site to go to if you want a basic introduction to a certain language or difference concepts for a particular ecosystem. The interface can sometimes be rather annoying, however, in the sense that much of the code required to actually do what you are being asked to do is obscured (you are very often learning in a vaccuum of sorts with many services running in the background). This is, in my opinion, a good second choice to freeCodeCamp.',
  'https://www.codecademy.com/',
  1
),
(
  'JSON Viewer for Chrome',
  '{Free, Browser Extension, Chrome, JSON, Development}',
  'Are you starting to deal with JSON and confronted with an ugly clump of code in your browser that is clearly a JavaScript object? If so, then this extension is for you!',
  'This is a Chrome extension for printing JSON and JSONP in the most beautiful and customizable way possible. Note that this extension might crash with other JSON highlighters/formatters (you may need to disable them). To highlight local files and incognito tabs you have to manually enable these options on the extensions page. ometimes when the plugin updates chrome leaves the old background process running and revokes some options, like the access to local files. When this happen just recheck the option that everything will work again. Works on local files (if you enable this in chrome://extensions).
  
  This extension is packed with features (e.g., syntax highlighting, 27 built-in themes, collapsible nodes, line numbers, etc.). Have fun!',
  'https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=en-US',
  2
);

-- POSTED JOBS
INSERT INTO posts_jobs (
  title,
  content,
  experience,
  contact_email,
  contact_phone,
  companies_id,
  users_id
) VALUES (
  'Job Post 1',
  'Lorem tempor quis in occaecat cupidatat amet sit. Ex sint cupidatat aute ea. Officia sit do consectetur deserunt consectetur occaecat enim aute. Nisi nisi sint mollit eu. Dolore laboris deserunt exercitation consequat voluptate pariatur ea duis mollit adipisicing sit ipsum incididunt. Consectetur anim aliquip exercitation commodo. Sunt sit culpa proident ex. Nostrud dolor cillum ullamco exercitation aliquip excepteur sint ex excepteur ipsum. Culpa laborum voluptate aliquip aliquip occaecat ea. Non ut aliqua aliqua ad ipsum velit id nulla commodo. In dolor aute mollit cupidatat id ipsum enim exercitation cillum pariatur. Occaecat et ut amet eu enim velit nisi velit qui est eu et reprehenderit occaecat. Ea enim enim velit occaecat magna amet eu do amet exercitation. Aliquip et sint cillum sit. Fugiat ad ex quis id nisi. Officia qui nostrud laborum labore laborum do sint occaecat pariatur reprehenderit aute aliqua magna cillum. Eiusmod cupidatat officia enim nisi aute veniam sit excepteur ex fugiat amet sint tempor do. Excepteur incididunt amet ullamco minim dolore commodo cupidatat sit duis. Ipsum anim quis sit sint aute aliqua sit Lorem amet.',
  'Adipisicing Lorem in excepteur sint occaecat minim commodo minim incididunt minim qui ea.',
  'company@email.com',
  '1-867-5309',
  3,
  5
),
(
  'Job Post 2',
  'Lorem tempor quis in occaecat cupidatat amet sit. Ex sint cupidatat aute ea. Officia sit do consectetur deserunt consectetur occaecat enim aute. Nisi nisi sint mollit eu. Dolore laboris deserunt exercitation consequat voluptate pariatur ea duis mollit adipisicing sit ipsum incididunt. Consectetur anim aliquip exercitation commodo. Sunt sit culpa proident ex. Nostrud dolor cillum ullamco exercitation aliquip excepteur sint ex excepteur ipsum. Culpa laborum voluptate aliquip aliquip occaecat ea. Non ut aliqua aliqua ad ipsum velit id nulla commodo. In dolor aute mollit cupidatat id ipsum enim exercitation cillum pariatur. Occaecat et ut amet eu enim velit nisi velit qui est eu et reprehenderit occaecat. Ea enim enim velit occaecat magna amet eu do amet exercitation. Aliquip et sint cillum sit. Fugiat ad ex quis id nisi. Officia qui nostrud laborum labore laborum do sint occaecat pariatur reprehenderit aute aliqua magna cillum. Eiusmod cupidatat officia enim nisi aute veniam sit excepteur ex fugiat amet sint tempor do. Excepteur incididunt amet ullamco minim dolore commodo cupidatat sit duis. Ipsum anim quis sit sint aute aliqua sit Lorem amet.',
  'Adipisicing Lorem in excepteur sint occaecat minim commodo minim incididunt minim qui ea.',
  'company@email.com',
  '1-867-5309',
  1,
  5
),
(
  'Job Post 3',
  'Lorem tempor quis in occaecat cupidatat amet sit. Ex sint cupidatat aute ea. Officia sit do consectetur deserunt consectetur occaecat enim aute. Nisi nisi sint mollit eu. Dolore laboris deserunt exercitation consequat voluptate pariatur ea duis mollit adipisicing sit ipsum incididunt. Consectetur anim aliquip exercitation commodo. Sunt sit culpa proident ex. Nostrud dolor cillum ullamco exercitation aliquip excepteur sint ex excepteur ipsum. Culpa laborum voluptate aliquip aliquip occaecat ea. Non ut aliqua aliqua ad ipsum velit id nulla commodo. In dolor aute mollit cupidatat id ipsum enim exercitation cillum pariatur. Occaecat et ut amet eu enim velit nisi velit qui est eu et reprehenderit occaecat. Ea enim enim velit occaecat magna amet eu do amet exercitation. Aliquip et sint cillum sit. Fugiat ad ex quis id nisi. Officia qui nostrud laborum labore laborum do sint occaecat pariatur reprehenderit aute aliqua magna cillum. Eiusmod cupidatat officia enim nisi aute veniam sit excepteur ex fugiat amet sint tempor do. Excepteur incididunt amet ullamco minim dolore commodo cupidatat sit duis. Ipsum anim quis sit sint aute aliqua sit Lorem amet.',
  'Adipisicing Lorem in excepteur sint occaecat minim commodo minim incididunt minim qui ea.',
  'company@email.com',
  '1-867-5309',
  2,
  5
),
(
  'Job Post 4',
  'Lorem tempor quis in occaecat cupidatat amet sit. Ex sint cupidatat aute ea. Officia sit do consectetur deserunt consectetur occaecat enim aute. Nisi nisi sint mollit eu. Dolore laboris deserunt exercitation consequat voluptate pariatur ea duis mollit adipisicing sit ipsum incididunt. Consectetur anim aliquip exercitation commodo. Sunt sit culpa proident ex. Nostrud dolor cillum ullamco exercitation aliquip excepteur sint ex excepteur ipsum. Culpa laborum voluptate aliquip aliquip occaecat ea. Non ut aliqua aliqua ad ipsum velit id nulla commodo. In dolor aute mollit cupidatat id ipsum enim exercitation cillum pariatur. Occaecat et ut amet eu enim velit nisi velit qui est eu et reprehenderit occaecat. Ea enim enim velit occaecat magna amet eu do amet exercitation. Aliquip et sint cillum sit. Fugiat ad ex quis id nisi. Officia qui nostrud laborum labore laborum do sint occaecat pariatur reprehenderit aute aliqua magna cillum. Eiusmod cupidatat officia enim nisi aute veniam sit excepteur ex fugiat amet sint tempor do. Excepteur incididunt amet ullamco minim dolore commodo cupidatat sit duis. Ipsum anim quis sit sint aute aliqua sit Lorem amet.',
  'Adipisicing Lorem in excepteur sint occaecat minim commodo minim incididunt minim qui ea.',
  'company@email.com',
  '1-867-5309',
  1,
  6
),
(
  'Job Post 5',
  'Lorem tempor quis in occaecat cupidatat amet sit. Ex sint cupidatat aute ea. Officia sit do consectetur deserunt consectetur occaecat enim aute. Nisi nisi sint mollit eu. Dolore laboris deserunt exercitation consequat voluptate pariatur ea duis mollit adipisicing sit ipsum incididunt. Consectetur anim aliquip exercitation commodo. Sunt sit culpa proident ex. Nostrud dolor cillum ullamco exercitation aliquip excepteur sint ex excepteur ipsum. Culpa laborum voluptate aliquip aliquip occaecat ea. Non ut aliqua aliqua ad ipsum velit id nulla commodo. In dolor aute mollit cupidatat id ipsum enim exercitation cillum pariatur. Occaecat et ut amet eu enim velit nisi velit qui est eu et reprehenderit occaecat. Ea enim enim velit occaecat magna amet eu do amet exercitation. Aliquip et sint cillum sit. Fugiat ad ex quis id nisi. Officia qui nostrud laborum labore laborum do sint occaecat pariatur reprehenderit aute aliqua magna cillum. Eiusmod cupidatat officia enim nisi aute veniam sit excepteur ex fugiat amet sint tempor do. Excepteur incididunt amet ullamco minim dolore commodo cupidatat sit duis. Ipsum anim quis sit sint aute aliqua sit Lorem amet.',
  'Adipisicing Lorem in excepteur sint occaecat minim commodo minim incididunt minim qui ea.',
  'company@email.com',
  '1-867-5309',
  2,
  5
),
(
  'Job Post 6',
  'Lorem tempor quis in occaecat cupidatat amet sit. Ex sint cupidatat aute ea. Officia sit do consectetur deserunt consectetur occaecat enim aute. Nisi nisi sint mollit eu. Dolore laboris deserunt exercitation consequat voluptate pariatur ea duis mollit adipisicing sit ipsum incididunt. Consectetur anim aliquip exercitation commodo. Sunt sit culpa proident ex. Nostrud dolor cillum ullamco exercitation aliquip excepteur sint ex excepteur ipsum. Culpa laborum voluptate aliquip aliquip occaecat ea. Non ut aliqua aliqua ad ipsum velit id nulla commodo. In dolor aute mollit cupidatat id ipsum enim exercitation cillum pariatur. Occaecat et ut amet eu enim velit nisi velit qui est eu et reprehenderit occaecat. Ea enim enim velit occaecat magna amet eu do amet exercitation. Aliquip et sint cillum sit. Fugiat ad ex quis id nisi. Officia qui nostrud laborum labore laborum do sint occaecat pariatur reprehenderit aute aliqua magna cillum. Eiusmod cupidatat officia enim nisi aute veniam sit excepteur ex fugiat amet sint tempor do. Excepteur incididunt amet ullamco minim dolore commodo cupidatat sit duis. Ipsum anim quis sit sint aute aliqua sit Lorem amet.',
  'Adipisicing Lorem in excepteur sint occaecat minim commodo minim incididunt minim qui ea.',
  'company@email.com',
  '1-867-5309',
  3,
  4
),
(
  'Job Post 7',
  'Lorem tempor quis in occaecat cupidatat amet sit. Ex sint cupidatat aute ea. Officia sit do consectetur deserunt consectetur occaecat enim aute. Nisi nisi sint mollit eu. Dolore laboris deserunt exercitation consequat voluptate pariatur ea duis mollit adipisicing sit ipsum incididunt. Consectetur anim aliquip exercitation commodo. Sunt sit culpa proident ex. Nostrud dolor cillum ullamco exercitation aliquip excepteur sint ex excepteur ipsum. Culpa laborum voluptate aliquip aliquip occaecat ea. Non ut aliqua aliqua ad ipsum velit id nulla commodo. In dolor aute mollit cupidatat id ipsum enim exercitation cillum pariatur. Occaecat et ut amet eu enim velit nisi velit qui est eu et reprehenderit occaecat. Ea enim enim velit occaecat magna amet eu do amet exercitation. Aliquip et sint cillum sit. Fugiat ad ex quis id nisi. Officia qui nostrud laborum labore laborum do sint occaecat pariatur reprehenderit aute aliqua magna cillum. Eiusmod cupidatat officia enim nisi aute veniam sit excepteur ex fugiat amet sint tempor do. Excepteur incididunt amet ullamco minim dolore commodo cupidatat sit duis. Ipsum anim quis sit sint aute aliqua sit Lorem amet.',
  'Adipisicing Lorem in excepteur sint occaecat minim commodo minim incididunt minim qui ea.',
  'company@email.com',
  '1-867-5309',
  3,
  4
);

-- JOB APPLICATIONS
INSERT INTO job_applications (
  users_id,
  posts_jobs_id
) VALUES (
  1,
  1
),
(
  2,
  1
),
(
  3,
  1
),
(
  1,
  2
),
(
  2,
  2
),
(
  3,
  2
),
(
  1,
  3
),
(
  2,
  3
),
(
  3,
  3
),
(
  1,
  4
),
(
  2,
  4
),
(
  1,
  5
),
(
  2,
  5
),
(
  3,
  5
),
(
  2,
  6
),
(
  3,
  6
),
(
  1,
  7
),
(
  2,
  7
),
(
  3,
  7
);

-- PRIVATE MESSAGES
INSERT INTO private_messages(
  subject,
  message,
  sent_from,
  sent_to
) VALUES (
  'Culpa irure sit sint ullamco non tempor.',
  'Nostrud labore proident dolor cupidatat aliqua labore elit duis sint nisi Lorem qui id. Reprehenderit ex occaecat do dolor. Irure aute officia mollit reprehenderit amet enim do.',
  1,
  5
),
(
  'Culpa irure sit sint ullamco non tempor.',
  'Nostrud labore proident dolor cupidatat aliqua labore elit duis sint nisi Lorem qui id. Reprehenderit ex occaecat do dolor. Irure aute officia mollit reprehenderit amet enim do.',
  1,
  5
),
(
  'Culpa irure sit sint ullamco non tempor.',
  'Nostrud labore proident dolor cupidatat aliqua labore elit duis sint nisi Lorem qui id. Reprehenderit ex occaecat do dolor. Irure aute officia mollit reprehenderit amet enim do.',
  1,
  5
),
(
  'Culpa irure sit sint ullamco non tempor.',
  'Nostrud labore proident dolor cupidatat aliqua labore elit duis sint nisi Lorem qui id. Reprehenderit ex occaecat do dolor. Irure aute officia mollit reprehenderit amet enim do.',
  2,
  6
),
(
  'Culpa irure sit sint ullamco non tempor.',
  'Nostrud labore proident dolor cupidatat aliqua labore elit duis sint nisi Lorem qui id. Reprehenderit ex occaecat do dolor. Irure aute officia mollit reprehenderit amet enim do.',
  2,
  5
),
(
  'Culpa irure sit sint ullamco non tempor.',
  'Nostrud labore proident dolor cupidatat aliqua labore elit duis sint nisi Lorem qui id. Reprehenderit ex occaecat do dolor. Irure aute officia mollit reprehenderit amet enim do.',
  1,
  3
),
(
  'Culpa irure sit sint ullamco non tempor.',
  'Nostrud labore proident dolor cupidatat aliqua labore elit duis sint nisi Lorem qui id. Reprehenderit ex occaecat do dolor. Irure aute officia mollit reprehenderit amet enim do.',
  1,
  4
),
(
  'Culpa irure sit sint ullamco non tempor.',
  'Nostrud labore proident dolor cupidatat aliqua labore elit duis sint nisi Lorem qui id. Reprehenderit ex occaecat do dolor. Irure aute officia mollit reprehenderit amet enim do.',
  1,
  5
),
(
  'Culpa irure sit sint ullamco non tempor.',
  'Nostrud labore proident dolor cupidatat aliqua labore elit duis sint nisi Lorem qui id. Reprehenderit ex occaecat do dolor. Irure aute officia mollit reprehenderit amet enim do.',
  3,
  4
),
(
  'Culpa irure sit sint ullamco non tempor.',
  'Nostrud labore proident dolor cupidatat aliqua labore elit duis sint nisi Lorem qui id. Reprehenderit ex occaecat do dolor. Irure aute officia mollit reprehenderit amet enim do.',
  1,
  6
),
(
  'Culpa irure sit sint ullamco non tempor.',
  'Nostrud labore proident dolor cupidatat aliqua labore elit duis sint nisi Lorem qui id. Reprehenderit ex occaecat do dolor. Irure aute officia mollit reprehenderit amet enim do.',
  5,
  1
),
(
  'Culpa irure sit sint ullamco non tempor.',
  'Nostrud labore proident dolor cupidatat aliqua labore elit duis sint nisi Lorem qui id. Reprehenderit ex occaecat do dolor. Irure aute officia mollit reprehenderit amet enim do.',
  4,
  2
),
(
  'Culpa irure sit sint ullamco non tempor.',
  'Nostrud labore proident dolor cupidatat aliqua labore elit duis sint nisi Lorem qui id. Reprehenderit ex occaecat do dolor. Irure aute officia mollit reprehenderit amet enim do.',
  4,
  2
),
(
  'Culpa irure sit sint ullamco non tempor.',
  'Nostrud labore proident dolor cupidatat aliqua labore elit duis sint nisi Lorem qui id. Reprehenderit ex occaecat do dolor. Irure aute officia mollit reprehenderit amet enim do.',
  6,
  1
);

INSERT INTO reports (
  users_id,
  reason
) VALUES (
  1,
  'using the platform to troll beginners'
);

INSERT INTO reports (
  users_id,
  reason
 ) VALUES (
  1,
  'I dont like them'
);

INSERT INTO reports (
  users_id,
  reason
) VALUES (
  3,
  'He is weird'
);

INSERT INTO reports (
  companies_id,
  reason
) VALUES (
  1,
  'bad reputation of taking advatage of new programmers'
);


