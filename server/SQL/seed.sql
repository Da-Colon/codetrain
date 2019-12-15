-- COMPANIES
INSERT INTO companies (
  email, name, company_url, company_logo_url, description
) VALUES (
  'google@google.com', 
  'Google',
  'https://google.com',
  'https://2.bp.blogspot.com/-tRdfCkaPO0A/Ui-PRJLDZlI/AAAAAAABMI8/8L9maIUroq8/s640/google-new-logo.png',
  'Mollit ipsum ut labore magna consequat dolore. Duis ipsum dolore ipsum consectetur ipsum elit nisi veniam. Consectetur occaecat culpa enim ea. Id id eiusmod deserunt cupidatat. Mollit labore officia magna tempor.'
); 

INSERT INTO companies (
  email, name, company_url, company_logo_url, description
) VALUES (
  'gradpad@gmail.com', 
  'GradPad', 
  'https://google.com',
  'https://2.bp.blogspot.com/-tRdfCkaPO0A/Ui-PRJLDZlI/AAAAAAABMI8/8L9maIUroq8/s640/google-new-logo.png',
'Mollit ipsum ut labore magna consequat dolore. Duis ipsum dolore ipsum consectetur ipsum elit nisi veniam. Consectetur occaecat culpa enim ea. Id id eiusmod deserunt cupidatat. Mollit labore officia magna tempor.'
);  

INSERT INTO companies (
  email, name, company_url, company_logo_url, description
) VALUES (
  'sideqik@gmail.com', 
  'SideQik',
  'https://google.com',
  'https://2.bp.blogspot.com/-tRdfCkaPO0A/Ui-PRJLDZlI/AAAAAAABMI8/8L9maIUroq8/s640/google-new-logo.png',
'Mollit ipsum ut labore magna consequat dolore. Duis ipsum dolore ipsum consectetur ipsum elit nisi veniam. Consectetur occaecat culpa enim ea. Id id eiusmod deserunt cupidatat. Mollit labore officia magna tempor.'
);

-- BOOTCAMP USERS
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
) VALUES (
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
);

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
) VALUES (
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
);

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
) VALUES (
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
);

-- COMPANY USERS
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
) VALUES (
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
);

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
) VALUES (
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
);

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
) VALUES (
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
);

-- Not Authorized Users
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
) VALUES (
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
);

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
) VALUES (
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
);

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
) VALUES (
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
);

-- ADMIN USERS
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
) VALUES (
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
);

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
) VALUES (
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
);

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
) VALUES (
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
);

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
) VALUES (
  'preston@gmail.com',
  'test',
  'Preston',
  'C',
  NULL,
  NULL,
  NULL,
  TRUE,
  1,
  NULL,
  NULL
);

-- POSTS RESOURCE DATA

INSERT INTO posts_resources (
  title,
  short_description,
  full_description,
  resource_url,
  users_id
) VALUES (
  'Ipsum ea laboris cupidatat et duis do.',
  'Est ipsum laborum excepteur enim dolore ex ad deserunt irure adipisicing et ut aliquip pariatur. Quis irure est magna eu. Lorem sit reprehenderit velit deserunt fugiat laborum irure ut eu. Esse consectetur nostrud cillum et quis reprehenderit dolore enim elit cillum nulla. In nostrud sunt nisi aliquip ipsum occaecat esse voluptate magna do labore. Sit est cupidatat voluptate enim sunt.',
  'Lorem tempor quis in occaecat cupidatat amet sit. Ex sint cupidatat aute ea. Officia sit do consectetur deserunt consectetur occaecat enim aute. Nisi nisi sint mollit eu. Dolore laboris deserunt exercitation consequat voluptate pariatur ea duis mollit adipisicing sit ipsum incididunt. Consectetur anim aliquip exercitation commodo. Sunt sit culpa proident ex.
  Nostrud dolor cillum ullamco exercitation aliquip excepteur sint ex excepteur ipsum. Culpa laborum voluptate aliquip aliquip occaecat ea. Non ut aliqua aliqua ad ipsum velit id nulla commodo. In dolor aute mollit cupidatat id ipsum enim exercitation cillum pariatur. Occaecat et ut amet eu enim velit nisi velit qui est eu et reprehenderit occaecat. Ea enim enim velit occaecat magna amet eu do amet exercitation.
  Aliquip et sint cillum sit. Fugiat ad ex quis id nisi. Officia qui nostrud laborum labore laborum do sint occaecat pariatur reprehenderit aute aliqua magna cillum. Eiusmod cupidatat officia enim nisi aute veniam sit excepteur ex fugiat amet sint tempor do. Excepteur incididunt amet ullamco minim dolore commodo cupidatat sit duis. Ipsum anim quis sit sint aute aliqua sit Lorem amet.',
  'https://reactjs.org/docs/hooks-overview.html',
  1
);

INSERT INTO posts_resources (
  title,
  short_description,
  full_description,
  resource_url,
  users_id
) VALUES (
  'Ipsum ea laboris cupidatat et duis do.',
  'Est ipsum laborum excepteur enim dolore ex ad deserunt irure adipisicing et ut aliquip pariatur. Quis irure est magna eu. Lorem sit reprehenderit velit deserunt fugiat laborum irure ut eu. Esse consectetur nostrud cillum et quis reprehenderit dolore enim elit cillum nulla. In nostrud sunt nisi aliquip ipsum occaecat esse voluptate magna do labore. Sit est cupidatat voluptate enim sunt.',
  'Lorem tempor quis in occaecat cupidatat amet sit. Ex sint cupidatat aute ea. Officia sit do consectetur deserunt consectetur occaecat enim aute. Nisi nisi sint mollit eu. Dolore laboris deserunt exercitation consequat voluptate pariatur ea duis mollit adipisicing sit ipsum incididunt. Consectetur anim aliquip exercitation commodo. Sunt sit culpa proident ex.
  Nostrud dolor cillum ullamco exercitation aliquip excepteur sint ex excepteur ipsum. Culpa laborum voluptate aliquip aliquip occaecat ea. Non ut aliqua aliqua ad ipsum velit id nulla commodo. In dolor aute mollit cupidatat id ipsum enim exercitation cillum pariatur. Occaecat et ut amet eu enim velit nisi velit qui est eu et reprehenderit occaecat. Ea enim enim velit occaecat magna amet eu do amet exercitation.
  Aliquip et sint cillum sit. Fugiat ad ex quis id nisi. Officia qui nostrud laborum labore laborum do sint occaecat pariatur reprehenderit aute aliqua magna cillum. Eiusmod cupidatat officia enim nisi aute veniam sit excepteur ex fugiat amet sint tempor do. Excepteur incididunt amet ullamco minim dolore commodo cupidatat sit duis. Ipsum anim quis sit sint aute aliqua sit Lorem amet.',
  'https://reactjs.org/docs/hooks-overview.html',
  1
);

INSERT INTO posts_resources (
  title,
  short_description,
  full_description,
  resource_url,
  users_id
) VALUES (
  'Ipsum ea laboris cupidatat et duis do.',
  'Est ipsum laborum excepteur enim dolore ex ad deserunt irure adipisicing et ut aliquip pariatur. Quis irure est magna eu. Lorem sit reprehenderit velit deserunt fugiat laborum irure ut eu. Esse consectetur nostrud cillum et quis reprehenderit dolore enim elit cillum nulla. In nostrud sunt nisi aliquip ipsum occaecat esse voluptate magna do labore. Sit est cupidatat voluptate enim sunt.',
  'Lorem tempor quis in occaecat cupidatat amet sit. Ex sint cupidatat aute ea. Officia sit do consectetur deserunt consectetur occaecat enim aute. Nisi nisi sint mollit eu. Dolore laboris deserunt exercitation consequat voluptate pariatur ea duis mollit adipisicing sit ipsum incididunt. Consectetur anim aliquip exercitation commodo. Sunt sit culpa proident ex.
  Nostrud dolor cillum ullamco exercitation aliquip excepteur sint ex excepteur ipsum. Culpa laborum voluptate aliquip aliquip occaecat ea. Non ut aliqua aliqua ad ipsum velit id nulla commodo. In dolor aute mollit cupidatat id ipsum enim exercitation cillum pariatur. Occaecat et ut amet eu enim velit nisi velit qui est eu et reprehenderit occaecat. Ea enim enim velit occaecat magna amet eu do amet exercitation.
  Aliquip et sint cillum sit. Fugiat ad ex quis id nisi. Officia qui nostrud laborum labore laborum do sint occaecat pariatur reprehenderit aute aliqua magna cillum. Eiusmod cupidatat officia enim nisi aute veniam sit excepteur ex fugiat amet sint tempor do. Excepteur incididunt amet ullamco minim dolore commodo cupidatat sit duis. Ipsum anim quis sit sint aute aliqua sit Lorem amet.',
  'https://reactjs.org/docs/hooks-overview.html',
  2
);

INSERT INTO posts_resources (
  title,
  short_description,
  full_description,
  resource_url,
  users_id
) VALUES (
  'Ipsum ea laboris cupidatat et duis do.',
  'Est ipsum laborum excepteur enim dolore ex ad deserunt irure adipisicing et ut aliquip pariatur. Quis irure est magna eu. Lorem sit reprehenderit velit deserunt fugiat laborum irure ut eu. Esse consectetur nostrud cillum et quis reprehenderit dolore enim elit cillum nulla. In nostrud sunt nisi aliquip ipsum occaecat esse voluptate magna do labore. Sit est cupidatat voluptate enim sunt.',
  'Lorem tempor quis in occaecat cupidatat amet sit. Ex sint cupidatat aute ea. Officia sit do consectetur deserunt consectetur occaecat enim aute. Nisi nisi sint mollit eu. Dolore laboris deserunt exercitation consequat voluptate pariatur ea duis mollit adipisicing sit ipsum incididunt. Consectetur anim aliquip exercitation commodo. Sunt sit culpa proident ex.
  Nostrud dolor cillum ullamco exercitation aliquip excepteur sint ex excepteur ipsum. Culpa laborum voluptate aliquip aliquip occaecat ea. Non ut aliqua aliqua ad ipsum velit id nulla commodo. In dolor aute mollit cupidatat id ipsum enim exercitation cillum pariatur. Occaecat et ut amet eu enim velit nisi velit qui est eu et reprehenderit occaecat. Ea enim enim velit occaecat magna amet eu do amet exercitation.
  Aliquip et sint cillum sit. Fugiat ad ex quis id nisi. Officia qui nostrud laborum labore laborum do sint occaecat pariatur reprehenderit aute aliqua magna cillum. Eiusmod cupidatat officia enim nisi aute veniam sit excepteur ex fugiat amet sint tempor do. Excepteur incididunt amet ullamco minim dolore commodo cupidatat sit duis. Ipsum anim quis sit sint aute aliqua sit Lorem amet.',
  'https://reactjs.org/docs/hooks-overview.html',
  3
);

INSERT INTO posts_resources (
  title,
  short_description,
  full_description,
  resource_url,
  users_id
) VALUES (
  'Ipsum ea laboris cupidatat et duis do.',
  'Est ipsum laborum excepteur enim dolore ex ad deserunt irure adipisicing et ut aliquip pariatur. Quis irure est magna eu. Lorem sit reprehenderit velit deserunt fugiat laborum irure ut eu. Esse consectetur nostrud cillum et quis reprehenderit dolore enim elit cillum nulla. In nostrud sunt nisi aliquip ipsum occaecat esse voluptate magna do labore. Sit est cupidatat voluptate enim sunt.',
  'Lorem tempor quis in occaecat cupidatat amet sit. Ex sint cupidatat aute ea. Officia sit do consectetur deserunt consectetur occaecat enim aute. Nisi nisi sint mollit eu. Dolore laboris deserunt exercitation consequat voluptate pariatur ea duis mollit adipisicing sit ipsum incididunt. Consectetur anim aliquip exercitation commodo. Sunt sit culpa proident ex.
  Nostrud dolor cillum ullamco exercitation aliquip excepteur sint ex excepteur ipsum. Culpa laborum voluptate aliquip aliquip occaecat ea. Non ut aliqua aliqua ad ipsum velit id nulla commodo. In dolor aute mollit cupidatat id ipsum enim exercitation cillum pariatur. Occaecat et ut amet eu enim velit nisi velit qui est eu et reprehenderit occaecat. Ea enim enim velit occaecat magna amet eu do amet exercitation.
  Aliquip et sint cillum sit. Fugiat ad ex quis id nisi. Officia qui nostrud laborum labore laborum do sint occaecat pariatur reprehenderit aute aliqua magna cillum. Eiusmod cupidatat officia enim nisi aute veniam sit excepteur ex fugiat amet sint tempor do. Excepteur incididunt amet ullamco minim dolore commodo cupidatat sit duis. Ipsum anim quis sit sint aute aliqua sit Lorem amet.',
  'https://reactjs.org/docs/hooks-overview.html',
  2
);

INSERT INTO posts_resources (
  title,
  short_description,
  full_description,
  resource_url,
  users_id
) VALUES (
  'Ipsum ea laboris cupidatat et duis do.',
  'Est ipsum laborum excepteur enim dolore ex ad deserunt irure adipisicing et ut aliquip pariatur. Quis irure est magna eu. Lorem sit reprehenderit velit deserunt fugiat laborum irure ut eu. Esse consectetur nostrud cillum et quis reprehenderit dolore enim elit cillum nulla. In nostrud sunt nisi aliquip ipsum occaecat esse voluptate magna do labore. Sit est cupidatat voluptate enim sunt.',
  'Lorem tempor quis in occaecat cupidatat amet sit. Ex sint cupidatat aute ea. Officia sit do consectetur deserunt consectetur occaecat enim aute. Nisi nisi sint mollit eu. Dolore laboris deserunt exercitation consequat voluptate pariatur ea duis mollit adipisicing sit ipsum incididunt. Consectetur anim aliquip exercitation commodo. Sunt sit culpa proident ex. Nostrud dolor cillum ullamco exercitation aliquip excepteur sint ex excepteur ipsum. Culpa laborum voluptate aliquip aliquip occaecat ea. Non ut aliqua aliqua ad ipsum velit id nulla commodo. In dolor aute mollit cupidatat id ipsum enim exercitation cillum pariatur. Occaecat et ut amet eu enim velit nisi velit qui est eu et reprehenderit occaecat. Ea enim enim velit occaecat magna amet eu do amet exercitation. Aliquip et sint cillum sit. Fugiat ad ex quis id nisi. Officia qui nostrud laborum labore laborum do sint occaecat pariatur reprehenderit aute aliqua magna cillum. Eiusmod cupidatat officia enim nisi aute veniam sit excepteur ex fugiat amet sint tempor do. Excepteur incididunt amet ullamco minim dolore commodo cupidatat sit duis. Ipsum anim quis sit sint aute aliqua sit Lorem amet.',
  'https://reactjs.org/docs/hooks-overview.html',
  1
);

-- POSTS_JOB DATA
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
);

INSERT INTO posts_jobs (
  title,
  content,
  experience,
  contact_email,
  contact_phone,
  companies_id,
  users_id
) VALUES (
  'Job Post 2',
  'Lorem tempor quis in occaecat cupidatat amet sit. Ex sint cupidatat aute ea. Officia sit do consectetur deserunt consectetur occaecat enim aute. Nisi nisi sint mollit eu. Dolore laboris deserunt exercitation consequat voluptate pariatur ea duis mollit adipisicing sit ipsum incididunt. Consectetur anim aliquip exercitation commodo. Sunt sit culpa proident ex. Nostrud dolor cillum ullamco exercitation aliquip excepteur sint ex excepteur ipsum. Culpa laborum voluptate aliquip aliquip occaecat ea. Non ut aliqua aliqua ad ipsum velit id nulla commodo. In dolor aute mollit cupidatat id ipsum enim exercitation cillum pariatur. Occaecat et ut amet eu enim velit nisi velit qui est eu et reprehenderit occaecat. Ea enim enim velit occaecat magna amet eu do amet exercitation. Aliquip et sint cillum sit. Fugiat ad ex quis id nisi. Officia qui nostrud laborum labore laborum do sint occaecat pariatur reprehenderit aute aliqua magna cillum. Eiusmod cupidatat officia enim nisi aute veniam sit excepteur ex fugiat amet sint tempor do. Excepteur incididunt amet ullamco minim dolore commodo cupidatat sit duis. Ipsum anim quis sit sint aute aliqua sit Lorem amet.',
  'Adipisicing Lorem in excepteur sint occaecat minim commodo minim incididunt minim qui ea.',
  'company@email.com',
  '1-867-5309',
  1,
  5
);

INSERT INTO posts_jobs (
  title,
  content,
  experience,
  contact_email,
  contact_phone,
  companies_id,
  users_id
) VALUES (
  'Job Post 3',
  'Lorem tempor quis in occaecat cupidatat amet sit. Ex sint cupidatat aute ea. Officia sit do consectetur deserunt consectetur occaecat enim aute. Nisi nisi sint mollit eu. Dolore laboris deserunt exercitation consequat voluptate pariatur ea duis mollit adipisicing sit ipsum incididunt. Consectetur anim aliquip exercitation commodo. Sunt sit culpa proident ex. Nostrud dolor cillum ullamco exercitation aliquip excepteur sint ex excepteur ipsum. Culpa laborum voluptate aliquip aliquip occaecat ea. Non ut aliqua aliqua ad ipsum velit id nulla commodo. In dolor aute mollit cupidatat id ipsum enim exercitation cillum pariatur. Occaecat et ut amet eu enim velit nisi velit qui est eu et reprehenderit occaecat. Ea enim enim velit occaecat magna amet eu do amet exercitation. Aliquip et sint cillum sit. Fugiat ad ex quis id nisi. Officia qui nostrud laborum labore laborum do sint occaecat pariatur reprehenderit aute aliqua magna cillum. Eiusmod cupidatat officia enim nisi aute veniam sit excepteur ex fugiat amet sint tempor do. Excepteur incididunt amet ullamco minim dolore commodo cupidatat sit duis. Ipsum anim quis sit sint aute aliqua sit Lorem amet.',
  'Adipisicing Lorem in excepteur sint occaecat minim commodo minim incididunt minim qui ea.',
  'company@email.com',
  '1-867-5309',
  2,
  5
);

INSERT INTO posts_jobs (
  title,
  content,
  experience,
  contact_email,
  contact_phone,
  companies_id,
  users_id
) VALUES (
  'Job Post 4',
  'Lorem tempor quis in occaecat cupidatat amet sit. Ex sint cupidatat aute ea. Officia sit do consectetur deserunt consectetur occaecat enim aute. Nisi nisi sint mollit eu. Dolore laboris deserunt exercitation consequat voluptate pariatur ea duis mollit adipisicing sit ipsum incididunt. Consectetur anim aliquip exercitation commodo. Sunt sit culpa proident ex. Nostrud dolor cillum ullamco exercitation aliquip excepteur sint ex excepteur ipsum. Culpa laborum voluptate aliquip aliquip occaecat ea. Non ut aliqua aliqua ad ipsum velit id nulla commodo. In dolor aute mollit cupidatat id ipsum enim exercitation cillum pariatur. Occaecat et ut amet eu enim velit nisi velit qui est eu et reprehenderit occaecat. Ea enim enim velit occaecat magna amet eu do amet exercitation. Aliquip et sint cillum sit. Fugiat ad ex quis id nisi. Officia qui nostrud laborum labore laborum do sint occaecat pariatur reprehenderit aute aliqua magna cillum. Eiusmod cupidatat officia enim nisi aute veniam sit excepteur ex fugiat amet sint tempor do. Excepteur incididunt amet ullamco minim dolore commodo cupidatat sit duis. Ipsum anim quis sit sint aute aliqua sit Lorem amet.',
  'Adipisicing Lorem in excepteur sint occaecat minim commodo minim incididunt minim qui ea.',
  'company@email.com',
  '1-867-5309',
  1,
  6
);

INSERT INTO posts_jobs (
  title,
  content,
  experience,
  contact_email,
  contact_phone,
  companies_id,
  users_id
) VALUES (
  'Job Post 5',
  'Lorem tempor quis in occaecat cupidatat amet sit. Ex sint cupidatat aute ea. Officia sit do consectetur deserunt consectetur occaecat enim aute. Nisi nisi sint mollit eu. Dolore laboris deserunt exercitation consequat voluptate pariatur ea duis mollit adipisicing sit ipsum incididunt. Consectetur anim aliquip exercitation commodo. Sunt sit culpa proident ex. Nostrud dolor cillum ullamco exercitation aliquip excepteur sint ex excepteur ipsum. Culpa laborum voluptate aliquip aliquip occaecat ea. Non ut aliqua aliqua ad ipsum velit id nulla commodo. In dolor aute mollit cupidatat id ipsum enim exercitation cillum pariatur. Occaecat et ut amet eu enim velit nisi velit qui est eu et reprehenderit occaecat. Ea enim enim velit occaecat magna amet eu do amet exercitation. Aliquip et sint cillum sit. Fugiat ad ex quis id nisi. Officia qui nostrud laborum labore laborum do sint occaecat pariatur reprehenderit aute aliqua magna cillum. Eiusmod cupidatat officia enim nisi aute veniam sit excepteur ex fugiat amet sint tempor do. Excepteur incididunt amet ullamco minim dolore commodo cupidatat sit duis. Ipsum anim quis sit sint aute aliqua sit Lorem amet.',
  'Adipisicing Lorem in excepteur sint occaecat minim commodo minim incididunt minim qui ea.',
  'company@email.com',
  '1-867-5309',
  2,
  5
);

INSERT INTO posts_jobs (
  title,
  content,
  experience,
  contact_email,
  contact_phone,
  companies_id,
  users_id
) VALUES (
  'Job Post 6',
  'Lorem tempor quis in occaecat cupidatat amet sit. Ex sint cupidatat aute ea. Officia sit do consectetur deserunt consectetur occaecat enim aute. Nisi nisi sint mollit eu. Dolore laboris deserunt exercitation consequat voluptate pariatur ea duis mollit adipisicing sit ipsum incididunt. Consectetur anim aliquip exercitation commodo. Sunt sit culpa proident ex. Nostrud dolor cillum ullamco exercitation aliquip excepteur sint ex excepteur ipsum. Culpa laborum voluptate aliquip aliquip occaecat ea. Non ut aliqua aliqua ad ipsum velit id nulla commodo. In dolor aute mollit cupidatat id ipsum enim exercitation cillum pariatur. Occaecat et ut amet eu enim velit nisi velit qui est eu et reprehenderit occaecat. Ea enim enim velit occaecat magna amet eu do amet exercitation. Aliquip et sint cillum sit. Fugiat ad ex quis id nisi. Officia qui nostrud laborum labore laborum do sint occaecat pariatur reprehenderit aute aliqua magna cillum. Eiusmod cupidatat officia enim nisi aute veniam sit excepteur ex fugiat amet sint tempor do. Excepteur incididunt amet ullamco minim dolore commodo cupidatat sit duis. Ipsum anim quis sit sint aute aliqua sit Lorem amet.',
  'Adipisicing Lorem in excepteur sint occaecat minim commodo minim incididunt minim qui ea.',
  'company@email.com',
  '1-867-5309',
  3,
  4
);

INSERT INTO posts_jobs (
  title,
  content,
  experience,
  contact_email,
  contact_phone,
  companies_id,
  users_id
) VALUES (
  'Job Post 7',
  'Lorem tempor quis in occaecat cupidatat amet sit. Ex sint cupidatat aute ea. Officia sit do consectetur deserunt consectetur occaecat enim aute. Nisi nisi sint mollit eu. Dolore laboris deserunt exercitation consequat voluptate pariatur ea duis mollit adipisicing sit ipsum incididunt. Consectetur anim aliquip exercitation commodo. Sunt sit culpa proident ex. Nostrud dolor cillum ullamco exercitation aliquip excepteur sint ex excepteur ipsum. Culpa laborum voluptate aliquip aliquip occaecat ea. Non ut aliqua aliqua ad ipsum velit id nulla commodo. In dolor aute mollit cupidatat id ipsum enim exercitation cillum pariatur. Occaecat et ut amet eu enim velit nisi velit qui est eu et reprehenderit occaecat. Ea enim enim velit occaecat magna amet eu do amet exercitation. Aliquip et sint cillum sit. Fugiat ad ex quis id nisi. Officia qui nostrud laborum labore laborum do sint occaecat pariatur reprehenderit aute aliqua magna cillum. Eiusmod cupidatat officia enim nisi aute veniam sit excepteur ex fugiat amet sint tempor do. Excepteur incididunt amet ullamco minim dolore commodo cupidatat sit duis. Ipsum anim quis sit sint aute aliqua sit Lorem amet.',
  'Adipisicing Lorem in excepteur sint occaecat minim commodo minim incididunt minim qui ea.',
  'company@email.com',
  '1-867-5309',
  3,
  4
);

-- JOB_APPLICATIONS

INSERT INTO job_applications (
  users_id,
  posts_jobs_id
) VALUES (
  1,
  1
);

INSERT INTO job_applications (
  users_id,
  posts_jobs_id
) VALUES (
  2,
  1
);

INSERT INTO job_applications (
  users_id,
  posts_jobs_id
) VALUES (
  3,
  1
);

INSERT INTO job_applications (
  users_id,
  posts_jobs_id
) VALUES (
  1,
  2
);

INSERT INTO job_applications (
  users_id,
  posts_jobs_id
) VALUES (
  2,
  2
);

INSERT INTO job_applications (
  users_id,
  posts_jobs_id
) VALUES (
  3,
  2
);

INSERT INTO job_applications (
  users_id,
  posts_jobs_id
) VALUES (
  1,
  3
);

INSERT INTO job_applications (
  users_id,
  posts_jobs_id
) VALUES (
  2,
  3
);

INSERT INTO job_applications (
  users_id,
  posts_jobs_id
) VALUES (
  3,
  3
);

INSERT INTO job_applications (
  users_id,
  posts_jobs_id
) VALUES (
  1,
  4
);

INSERT INTO job_applications (
  users_id,
  posts_jobs_id
) VALUES (
  2,
  4
);

INSERT INTO job_applications (
  users_id,
  posts_jobs_id
) VALUES (
  1,
  5
);

INSERT INTO job_applications (
  users_id,
  posts_jobs_id
) VALUES (
  2,
  5
);

INSERT INTO job_applications (
  users_id,
  posts_jobs_id
) VALUES (
  3,
  5
);

INSERT INTO job_applications (
  users_id,
  posts_jobs_id
) VALUES (
  2,
  6
);

INSERT INTO job_applications (
  users_id,
  posts_jobs_id
) VALUES (
  3,
  6
);

INSERT INTO job_applications (
  users_id,
  posts_jobs_id
) VALUES (
  1,
  7
);

INSERT INTO job_applications (
  users_id,
  posts_jobs_id
) VALUES (
  2,
  7
);

INSERT INTO job_applications (
  users_id,
  posts_jobs_id
) VALUES (
  3,
  7
);

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
);

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
);

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
);

INSERT INTO private_messages(
  subject,
  message,
  sent_from,
  sent_to
) VALUES (
  'Culpa irure sit sint ullamco non tempor.',
  'Nostrud labore proident dolor cupidatat aliqua labore elit duis sint nisi Lorem qui id. Reprehenderit ex occaecat do dolor. Irure aute officia mollit reprehenderit amet enim do.',
  2,
  6
);

INSERT INTO private_messages(
  subject,
  message,
  sent_from,
  sent_to
) VALUES (
  'Culpa irure sit sint ullamco non tempor.',
  'Nostrud labore proident dolor cupidatat aliqua labore elit duis sint nisi Lorem qui id. Reprehenderit ex occaecat do dolor. Irure aute officia mollit reprehenderit amet enim do.',
  2,
  5
);

INSERT INTO private_messages(
  subject,
  message,
  sent_from,
  sent_to
) VALUES (
  'Culpa irure sit sint ullamco non tempor.',
  'Nostrud labore proident dolor cupidatat aliqua labore elit duis sint nisi Lorem qui id. Reprehenderit ex occaecat do dolor. Irure aute officia mollit reprehenderit amet enim do.',
  1,
  3
);

INSERT INTO private_messages(
  subject,
  message,
  sent_from,
  sent_to
) VALUES (
  'Culpa irure sit sint ullamco non tempor.',
  'Nostrud labore proident dolor cupidatat aliqua labore elit duis sint nisi Lorem qui id. Reprehenderit ex occaecat do dolor. Irure aute officia mollit reprehenderit amet enim do.',
  1,
  4
);

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
);

INSERT INTO private_messages(
  subject,
  message,
  sent_from,
  sent_to
) VALUES (
  'Culpa irure sit sint ullamco non tempor.',
  'Nostrud labore proident dolor cupidatat aliqua labore elit duis sint nisi Lorem qui id. Reprehenderit ex occaecat do dolor. Irure aute officia mollit reprehenderit amet enim do.',
  3,
  4
);

INSERT INTO private_messages(
  subject,
  message,
  sent_from,
  sent_to
) VALUES (
  'Culpa irure sit sint ullamco non tempor.',
  'Nostrud labore proident dolor cupidatat aliqua labore elit duis sint nisi Lorem qui id. Reprehenderit ex occaecat do dolor. Irure aute officia mollit reprehenderit amet enim do.',
  1,
  6
);

INSERT INTO private_messages(
  subject,
  message,
  sent_from,
  sent_to
) VALUES (
  'Culpa irure sit sint ullamco non tempor.',
  'Nostrud labore proident dolor cupidatat aliqua labore elit duis sint nisi Lorem qui id. Reprehenderit ex occaecat do dolor. Irure aute officia mollit reprehenderit amet enim do.',
  5,
  1
);

INSERT INTO private_messages(
  subject,
  message,
  sent_from,
  sent_to
) VALUES (
  'Culpa irure sit sint ullamco non tempor.',
  'Nostrud labore proident dolor cupidatat aliqua labore elit duis sint nisi Lorem qui id. Reprehenderit ex occaecat do dolor. Irure aute officia mollit reprehenderit amet enim do.',
  4,
  2
);

INSERT INTO private_messages(
  subject,
  message,
  sent_from,
  sent_to
) VALUES (
  'Culpa irure sit sint ullamco non tempor.',
  'Nostrud labore proident dolor cupidatat aliqua labore elit duis sint nisi Lorem qui id. Reprehenderit ex occaecat do dolor. Irure aute officia mollit reprehenderit amet enim do.',
  4,
  2
);

INSERT INTO private_messages(
  subject,
  message,
  sent_from,
  sent_to
) VALUES (
  'Culpa irure sit sint ullamco non tempor.',
  'Nostrud labore proident dolor cupidatat aliqua labore elit duis sint nisi Lorem qui id. Reprehenderit ex occaecat do dolor. Irure aute officia mollit reprehenderit amet enim do.',
  6,
  1
);