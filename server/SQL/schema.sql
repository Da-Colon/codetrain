CREATE TABLE user_types (
  id SERIAL PRIMARY KEY,
  type TEXT
);

INSERT INTO user_types (
  id, type
) VALUES 
  (1, 'administrator'), 
  (2, 'bootcamper'), 
  (3, 'company');

CREATE TABLE companies (
  id SERIAL PRIMARY KEY,
  email VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(100),
  company_url TEXT,
  company_logo_url TEXT,
  description TEXT
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(50) NOT NULL UNIQUE,
  password TEXT NOT NULL,
  first_name VARCHAR(25) NOT NULL,
  last_name VARCHAR(25) NOT NULL,
  skills TEXT[],
  github_url TEXT,
  linkedin_url TEXT,
  auth BOOLEAN DEFAULT (FALSE),
  user_types_id INTEGER REFERENCES user_types(id),
  bootcamp_name VARCHAR(100),
  companies_id INTEGER REFERENCES companies(id)
);

CREATE TABLE posts_resources (
  id SERIAL PRIMARY KEY,
  up_votes INTEGER DEFAULT (0),
  down_votes INTEGER DEFAULT (0),
  title VARCHAR(100),
  short_description VARCHAR(400),
  full_description TEXT,
  resource_url TEXT,
  date_posted DATE DEFAULT NOW(),
  users_id INTEGER REFERENCES users(id)
);

CREATE TABLE posts_jobs (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  content TEXT NOT NULL,
  experience TEXT,
  date_posted DATE DEFAULT NOW(),
  contact_email VARCHAR(50),
  contact_phone VARCHAR(15),
  companies_id INTEGER REFERENCES companies(id),
  users_id INTEGER REFERENCES users(id)
);

CREATE TABLE job_applications (
  id SERIAL PRIMARY KEY,
  date_applied DATE DEFAULT NOW(),
  rejected BOOLEAN DEFAULT FALSE,
  accepted BOOLEAN DEFAULT FALSE,
  users_id INTEGER REFERENCES users(id),
  posts_jobs_id INTEGER REFERENCES posts_jobs(id)
);

CREATE TABLE private_messages(
  id SERIAL PRIMARY KEY,
  subject TEXT,
  message TEXT,
  sent_from INTEGER REFERENCES users(id),
  sent_from_companies_id INTEGER REFERENCES companies(id),
  sent_to INTEGER REFERENCES users(id),
  date_sent DATE DEFAULT NOW()
);

CREATE TABLE preferences(
  id SERIAL PRIMARY KEY,
  users_id INTEGER REFERENCES users(id)
);

CREATE TABLE reports (
  id SERIAL PRIMARY KEY,
  users_id INTEGER REFERENCES users(id),
  posts_jobs_id INTEGER REFERENCES posts_jobs(id),
  companies_id INTEGER REFERENCES companies(id),
  resource_id INTEGER REFERENCES posts_resources(id),
  reason TEXT,
  submited_by INTEGER REFERENCES users(id),
  resolved BOOLEAN DEFAULT (False)
)

-- Need to Figure out Data Storage for PDFs

-- CREATE TABLE auth_users(
--   id SERIAL PRIMARY KEY,
--   acceptance_letter 
-- )
