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
  'Dave',
  'Apples',
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
  'Bananas',
   '{Javascript, HTML5, CSS3, postgreSQL, React, Python, jQuery}',
  'github.com/Da-Colon',
  'https://www.linkedin.com/in/david-colon-600994124/',
  TRUE,
  2,
  'General Assembly',
  NULL
),
(
  'nocarrots@gmail.com',
  'test',
  'Nep',
  'Carrots',
  '{Javascript, HTML5, CSS3, Bulma, Boomer}',
  'github.com/Da-Colon',
  'https://www.linkedin.com/in/david-colon-600994124/',
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
  'SHORT_DESCRIPTION',
  'FULL_DESCRIPTION',
  'https://stackoverflow.com/',
  1
),
(
  'Flexbox Froggy',
  '{Tutorial, Game, CSS, Flexbox}',
  'SHORT_DESCRIPTION',
  'FULL_DESCRIPTION',
  'http://flexboxfroggy.com/',
  2
),
(
  'Flexbox Froggy Guide',
  '{Guide, Reference, CSS, Flexbox}',
  'SHORT_DESCRIPTION',
  'FULL_DESCRIPTION',
  'https://github.com/daniel-farlow/flexbox-froggy',
  3
),
(
  'CSS Diner',
  '{CSS, Game}',
  'SHORT_DESCRIPTION',
  'FULL_DESCRIPTION',
  'https://flukeout.github.io/',
  2
),
(
  'CSS Diner Guide',
  '{Guide, Reference, CSS}',
  'SHORT_DESCRIPTION',
  'FULL_DESCRIPTION',
  'https://github.com/daniel-farlow/css-diner',
  1
),
(
  'VSCode Keyboard Shortcuts',
  '{IDE, Reference, Shortcuts}',
  'SHORT_DESCRIPTION',
  'FULL_DESCRIPTION',
  'https://github.com/daniel-farlow/VSCode-Keyboard-Shortcuts',
  2
),
(
  'Deploying on AWS',
  '{Guide, Deployment, Tutorial}',
  'SHORT_DESCRIPTION',
  'FULL_DESCRIPTION',
  'https://github.com/daniel-farlow/deploying-on-aws',
  3
),
(
  'Small Group Projects - Tips for Success',
  '{Blog, Productivity, Teams, Work}',
  'SHORT_DESCRIPTION',
  'FULL_DESCRIPTION',
  'https://blog.neporshiso.com/small-group-projects/',
  1
),
(
  'freeCodeCamp',
  '{Free, Tutorial, Reference, Learning, Education}',
  'SHORT_DESCRIPTION',
  'FULL_DESCRIPTION',
  'https://www.freecodecamp.org/',
  1
),
(
  'Codecademy',
  '{Free, Premium, Quizzes, Tutorial, Reference, Learning, Education}',
  'SHORT_DESCRIPTION',
  'FULL_DESCRIPTION',
  'https://www.codecademy.com/',
  1
),
(
  'JSON Viewer',
  '{Free, Browser Extension, Chrome, JSON, Development}',
  'SHORT_DESCRIPTION',
  'FULL_DESCRIPTION',
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