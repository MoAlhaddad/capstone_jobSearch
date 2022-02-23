
INSERT into Job(
      id,
      country, -- country of company
      job_title, -- Job title
      min_salary, -- Min Salary
      max_salary, -- Max Salary
      description, -- description of role applying for
     company_name -- Nmae of Company
)

values (
        1,
       'UK',
       'Program Manager',
       57623.78,
       57623.78,
       'This role requires an individual with excellent analytical abilities, outstanding business acumen, expert in partnering and earning trust with different stakeholders. Should have relentless customer advocacy, obsession, strategic along with robust interpersonal and influencing skills, and an ability to gather business requirements across Global teams to help build metrices.',
       'Amazon'

(
     select id
     from country
     where name = 'UK'
),
  current_timestamp

);

INSERT into Job(
       id,
      country, -- country of company
      job_title, -- Job title
      min_salary, -- Min Salary
      max_salary, -- Max Salary
      description, -- description of role applying for
     company_name -- Nmae of Company
)

values (

      2,
      'UK',
      'Senior HR Business Partner'
      58470.38,
      65065.49,
      'The Senior HR Business Partner will be an advisor to senior Operations leaders, utilizing their strong HR experience and expertise.',
      'Amazon'


)
(
     select id
     from country
     where name = 'UK'
),
  current_timestamp

);

INSERT into Job(

     id,
     country,
     job_title,
     min_salary,
     max_salary,
     description,
     company_name

)
values (
     3,
     'UK',
     'Maintenance Technician',
     34456.76,
     62632.27,
     'Maintain Web Development at effiecient level for Company',
     'Amazon'

     
)
(
     select id
     from country
     where name = 'UK'
),
  current_timestamp

);

INSERT into Job(

     id,
     country,
     job_title,
     min_salary,
     max_salary,
     description,
     company_name
)
values (
     4,
     'UK',
     'Driving Instructor Trainee',
     20492.71,
     25492.71,
     'Train and Assist people before there driving test'
     'My Four Wheels'
)
(
     select id
     from country
     where name = 'UK'
),
  current_timestamp

);

INSERT into Job(

     id,
     country,
     job_title,
     min_salary,
     max_salary,
     description,
     company_name
)
values(
     5,
     'UK',
     'Software Development Engineer',
     50000,
     57000,
     'Simulation and Experimentation (SimEx) team is looking for an experienced and passionate Software Development Engineer (SDE) to join our fast-paced stimulating environment, to help invent the future of retail with technology. ',
     'Amazon'
)
(
     select id
     from country
     where name = 'UK'
),
  current_timestamp

);

INSERT into Job(

     id,
     country,
     job_title,
     min_salary,
     max_salary,
     description,
     company_name
)

values(
     6,
     'UK',
     'Software Engineer',
     70000,
     80000,
     'Implement front-end styling to companies web app',
     'Ncounter'
)
(
     select id
     from country
     where name = 'UK'
),
  current_timestamp

);

INSERT into Job(

     id,
     country,
     job_title,
     min_salary,
     max_salary,
     description,
     company_name
)

values(

     7,
     'UK',
     'Mobile Software Engineer',
     54000,
     54110,
     'As a Mobile Software Engineer in Test should have experience in automated software testing in an agile and DevOps culture, with deep knowledge of the STLC and a real passion for quality and strong experience with tools such as Robot, Selenium, Post Man, Cypress or Puppeteer.',
     'Jaguar'
)
(
     select id
     from country
     where name = 'UK'
),
  current_timestamp

);

INSERT into Job(

     id,
     country,
     job_title,
     min_salary,
     max_salary,
     description,
     company_name
)

values(
     8,
     'UK',
     'Senior C++ Software Engineer',
     100000,
     110000,
     'The Senior C++ Developer will work on the clients core trading engine as part of their core low-latency market data engineering team.',
     'Miller Maxwell Ltd'
)
(
     select id
     from country
     where name = 'UK'
),
  current_timestamp

);
INSERT into Job(

     id,
     country,
     job_title,
     min_salary,
     max_salary,
     description,
     company_name
)

values (
       9,
       'UK',
       'Software Engineer',
       50000,
       52000,
       'role includes analyzing and modifying existing software as well as designing, constructing and testing end-user applications that meet user needs — all through software programming languages.',
       'Rise Technical Recruitment Ltd'
)
(
     select id
     from country
     where name = 'UK'
),
  current_timestamp

);
INSERT into Job(

     id,
     country,
     job_title,
     min_salary,
     max_salary,
     description,
     company_name
)

values (

     10,
     'UK',
     'Embedded Software Engineer',
     50000,
     65000,
     'We are looking for a professional Embedded Software Engineer to execute complete embedded software development lifecycle. The goal is to create scalable and optimized software systems.',
     'Computer Futures'
)
(
     select id
     from country
     where name = 'UK'
),
  current_timestamp

);