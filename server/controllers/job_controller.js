const config = require("../config");
const axios = require("axios");

module.exports = {
  
  getJobs: (req, res) => {
    const { country } = req.query;

    if (country) {
      return axios
        .get(
          `${config.BASE_URL}${country}/search/1?app_id=d4ab5126&app_key=299c01e42f474c75c83b393845adb756&results_per_page=20&content-type=application/json`
        )
        .then((jobsResponse) => {
          return res
            .status(200)
            .json({ jobs: jobsResponse.data.results, success: true });
        })
        .catch((err) => res.json({ err: err, success: false }));
    }
    return res.json({ success: false });
  },

  createJob: (req, res) => {
    const dbInstance = req.app.get("db");

    const {
      company_name,
      min_salary,
      job_title,
      max_salary,
      country,
      description,
    } = req.body;

    console.log({
      company_name,
      min_salary,
      job_title,
      max_salary,
      country,
      description,
    });
    return dbInstance
      .create_job_entry({
        id,
        company_name,
        min_salary,
        job_title,
        max_salary,
        country,
        description,
      })
      .then((createdJobEntry) => {
        res.status(201).json({ success: true }); //Success is not required, return a 201 status code indicating a record has been created.
      })
      .catch((err) => console.log(err));
  },

  /*
     ** Success is not required, return a 204 status code indicating a record has been updated, therefore return no content.
     
     ** Instead refresh the screen with updated data.
     ** In a professional situation i would refresh a grid, or refresh the modal with updated data.
     */
  updateJob: (req, res) => {
    return dbInstance
      .update_Job({
        id,
        company_name,
        job_title,
        min_salaty,
        max_salary,
        country,
        description,
      })
      .then((updatedJob) => {
        res.status(204).json({ success: true });
      })
      .catch((err) => console.log(err));
  },

  deleteJob: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    /*
     ** Success is not required, return a 204 status code indicating a record has been deleted, therefore return no content.
     */
    return dbInstance
      .delete_job_entry({ id })
      .then((deletedJobEntry) => {
        res.status(204).json({ success: true });
      })
      .catch((err) => console.log(err));
  },

  filterJobs: (req, res) => {
    const dbInstance = req.app.get("db");
    const { filters, typeOfComparison } = req.body;
    console.log("FILTERS:", filters);
    const filterToUse = Object.keys(filters).filter(
      (filtKey) => filters[filtKey].active === true
    );
    console.log("Filters to use:", filtersToUse);
    return dbInstance
      .get_all_jobs()
      .then((jobs) => {
        //Case sensitive filter.
        const filteredJobs = jobs.filter((job) => {
          if (typeOfComparison === "and") {
            return filtersToUse.every((filtKey) =>
              `${job[filtKey]}`.includes(filters[filtKey].value)
            );
          }
        });
        return res.status(200).json({ filteredJobs });
      })
      .catch((err) => console.log(err));
  },
  getJobCountries: (req, res) => {
    const dbInstance = req.app.get("db");
    return dbInstance
      .get_job_countries()
      .then((Countries) => {
        return res.status(200).json({ country });
      })
      .catch((error) => {
        return console.log(error);
      });
  },
};

// in the for loop create a random index from 1 to ten implententing math.floor and math.random, assign that result to a variable called random index have it camelcase
//Using the random index get the specific Jobs from the Jobs retrieved using bracket notation [] to select a random Job
//after item retrieved assign it to variable called random Job
//then add random job to the empty array using push or unshift
//AFTER for loop pass the array that i just added to the .json and this will return my random Jobs
