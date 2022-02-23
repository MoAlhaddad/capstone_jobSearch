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

    11,
    'CA',
    'Director of Software Engineering',
    288000,
    384000,
    'Software Engineering Director directs and oversees the software engineering function in developing, releasing, and maintaining software applications/operating systems according to business needs. Establishes policies and procedures that produce high-quality software product and service.',
    'Techouver'

)
(
     select id
     from country
     where name = 'CA'
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

    12,
    'CA',
    'Lead Software Engineer',
    240000,
    288000,
    'Prenuvo is a fast growing health tech company specializing in whole body diagnostic imaging. At Prenuvo, we believe that everyone should have the insights and information they need to make informed decisions about their health. Our goal is to help people live happier, healthier, and longer lives through early detection and unparalleled clarity into their health.',
    'Prenuvo'

)
(
     select id
     from country
     where name = 'CA'
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

    13,
    'CA',
    'Principal Software Engineer',
    240000,
    384000,
    'The Senior Principal Software Engineer will use modern tools, techniques, and methods to design and develop new applications, components and services built on our next generation cloud-native commerce platform.',
    'Partnerstack'

)
(
     select id
     from country
     where name = 'CA'
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

    14,
    'CA',
    'Principal Software Engineer',
    288000,
    288000,
    'Aptos is 100% focused on shaping and enabling the future of retailing while helping to build great futures for our colleagues. We are a company that has developed through retail, understands where retailers and their customers are today, and knows exactly where they are heading. Check out a global list of our open positions below. If this sounds like your kind of opportunity, and if you have what it takes to excel with the industry best, we invite you to join the ride. ',
    'Apto'

)
(
     select id
     from country
     where name = 'CA'
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

    15,
    'CA',
    'Software Engineering Manager',
    240000,
    288000,
    'A software engineering manager is an experienced software engineer who helps supervise the design and development of software projects. This role is also referred to as an engineering manager, and many engineering departments employ several of these individuals to keep multiple projects running smoothly',
    'Kijiji'
)

(
     select id
     from country
     where name = 'CA'
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
     company_name -- Name of Company
)

values (

    16,
    'CA',
    'Software Engineering Manager',
     100000,
     115000,
    'Are you a Software Engineering Manager who is looking to work on modern, sophisticated applications, using leading edge technologies? Our Client is the leader in their industry providing solutions for the global financial sector. We love this company because they have been recognized with numerous awards, is rapidly growing, and is located in a beautiful office in Gastown. Our client has asked for our help in looking for a Software Engineering Manager for a permanent position.',
    'SIGnature Recruiting Inc.'

)

(
     select id
     from country
     where name = 'CA'
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
     company_name -- Name of Company
)

values (

    17,
    'CA',
    'Director, Software Engineering',
    288000,
    384000,
    'Software Engineering Director directs and oversees the software engineering function in developing, releasing and maintaing software applications/operating systems according to business needs',
    'Gemstone Logistics Inc'
)

(
     select id
     from country
     where name = 'CA'
),
  current_timestamp

);