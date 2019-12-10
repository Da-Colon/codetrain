CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(25) NOT NULL,
  password VARCHAR(12) NOT NULL,
  first_name VARCHAR(25) NOT NULL,
  last_name VARCHAR(25) NOT NULL,
  github_url VARCHAR(125) NOT NULL,
  linkedin_url VARCHAR(125) NOT NULL,
  auth BOOLEAN,
  bootcamp_name VARCHAR(100)
);

CREATE TABLE user_profile (
  skills TEXT[],
  user_id INTEGER REFERENCES users(id)
);


CREATE TABLE company (
  id SERIAL PRIMARY KEY,
  email VARCHAR(25) NOT NULL,
  company_url VARCHAR(125),
  company_logo_url VARCHAR(125),
);

CREATE TABLE company_users (
  company_id INTEGER REFERENCES company(id),
) INHERITS (users);

CREATE TABLE posts_resources (
  id SERIAL PRIMARY KEY,
  up_votes INTEGER,
  down_votes INTEGER,
  title VARCHAR(100),
  short_description VARCHAR(400),
  full_description text,
  resource_url VARCHAR(125)
);

CREATE TABLE post_job_board (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  content TEXT,
  experience TEXT,
  contact_email VARCHAR(25),
  contact_phone VARCHAR(10),
  company_id INTEGER REFERENCES company(id),
  company_users_id INTEGER REFERENCES company_users(id)
);

CREATE TABLE private_messages(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  company_id INTEGER REFERENCES company(id),
  company_users_id INTEGER REFERENCES company_users(id)
);

-- Need to Figure out Data Storage for PDFs

-- CREATE TABLE auth_users(
--   id SERIAL PRIMARY KEY,
--   acceptance_letter 
-- )
