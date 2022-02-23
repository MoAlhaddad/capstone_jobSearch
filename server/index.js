const utils = require("./utils");
const express = require("express");
const massive = require("massive");
const app = express();
const url = require("url");
const axios = require("axios");
const config = require("./config");
const { appendFile } = require("fs");
const job_controller = require("./controllers/job_controller");

const headers = {
  "Content-type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET",
};

// ?search=php&location=london
const decodeParams = (searchParams) =>
  Array.from(searchParams.keys()).reduce(
    (acc, key) => ({ ...acc, [key]: searchParams.get(key) }),
    {}
  );

app.use(express.json());

app.use((req, res, next) => {
  const requestURL = url.parse(req.url);
  //{search: 'php', location: 'london'}
  const decodedParams = decodeParams(new URLSearchParams(requestURL.search));
  const { search, location, country = "gb" } = decodedParams;

  const targetURL = `${config.BASE_URL}/${country.toLowerCase()}/${
    config.BASE_PARAMS
  }&app_id=${config.APP_ID}
    &app_key=${config.API_KEY}&what=${search}&where=${location}`;

  if (req.method === "GET") {
    console.log(`Proxy GET request to : ${targetURL}`);
    axios
      .get(targetURL)
      .then((response) => {
        res.writeHead(200, headers);
        res.end(JSON.stringify(response.data));
      })
      .catch((error) => {
        utils.errorMessage(error);
        res.writeHead(500, headers);
        res.end(JSON.stringify(error));
      });
  }
  next();
});



app.get("/api/getJobs", job_controller.getJobs);

app.post("/api/createJobs", job_controller.createJob);

app.put("/api/updateJobs", job_controller.updateJob);

app.delete("/api/deleteJobs", job_controller.deleteJob);

app.post("/api/filter_jobs", job_controller.filterJobs);

app.get("/api/get_job_countries", job_controller.getJobCountries);

app.listen(4500, () => {
  utils.successMessage("Server listening");
});
