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

app.use(express.static(`${__dirname}/../build`));
app.use(express.urlencoded());
app.use(express.json());

const SERVER_PORT = 4500,
  DB_HOST = "ec2-3-218-47-9.compute-1.amazonaws.com",
  DB_PASSWORD =
    "31f59dc837cac6e78f15d23c9eeeb821641c62ca6433aebc1a28de57ad18bb71",
  DB_DATABASE = "d6lc0q1fdo8udb",
  DB_USER = "gphsaewxfvokje",
  DB_PORT = "5432";

//app.use((req, res, next) => {
// const requestURL = url.parse(req.url);
//{search: 'php', location: 'london'}
//const decodedParams = decodeParams(new URLSearchParams(requestURL.search));
//const { search, location, country = "gb" } = decodedParams;

// app.use(
//   "/api",
//   createProxyMiddleware({
//     target: "http://localhost:3000/",
//     changeOrigin: true,
//   })
// );

// console.log(CONNECTION_STRING);

massive({
  host: DB_HOST,
  port: DB_PORT,
  database: DB_DATABASE,
  user: DB_USER,
  password: DB_PASSWORD,
  ssl: { rejectUnauthorized: false },
})
  .then((database) => {
    app.set("db", database);
  })
  .catch((err) => console.log("Massive Connection Error---------", err));

//   const targetURL = `${config.BASE_URL}/${country.toLowerCase()}/${
//     config.BASE_PARAMS
//   }&app_id=${config.APP_ID}&app_key=${
//     config.APP_KEY
//   }&what=${search}&where=${location}`;

//   if (req.method === "GET") {
//     console.log(`Proxy GET request to : ${targetURL}`);
//     axios
//       .get(targetURL)
//       .then((response) => {
//         res.writeHead(200, headers);
//         res.end(JSON.stringify(response.data));
//       })
//       .catch((error) => {
//         utils.errorMessage(error);
//         res.writeHead(500, headers);
//         res.end(JSON.stringify(error));
//       });
//   }
//   next();
// });

app.get("/api/getJobs", job_controller.getJobs);

app.post("/api/createJobs", job_controller.createJob);

app.put("/api/updateJobs", job_controller.updateJob);

app.delete("/api/deleteJobs", job_controller.deleteJob);

app.post("/api/filter_jobs", job_controller.filterJobs);

app.get("/api/get_job_countries", job_controller.getJobCountries);

app.listen(4500, () => {
  utils.successMessage("Server listening");
});
