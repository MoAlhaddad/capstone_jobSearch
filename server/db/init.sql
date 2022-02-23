--lk_countries look up table will be displayed on the select tag
create table user
{
    id SERIAL PRIMARY KEY,
  	email VARCHAR(40) unique,
  	password VARCHAR(10) unique,
  	first_name VARCHAR(10),
    last_name VARCHAR(10)
};


create table applications
(
	  id  SERIAL PRIMARY KEY,
  	user_id  INTEGER REFERENCES user (id) not null,
    job_id  INTEGER REFERENCES Job (id) not null
);

create table favoriteJob (
    id  SERIAL PRIMARY KEY,
  	user_id  INTEGER REFERENCES user (id) not null,
    job_id  INTEGER REFERENCES Job (id) not null,
);



create table Job (
  
  id SERIAL PRIMARY KEY,
  company_name  VARCHAR, -- name of company
  country  VARCHAR, -- country of company
  job_title  VARCHAR,
  min_salary  INTEGER,
  max_salary  INTEGER,
  description  VARCHAR,
);

