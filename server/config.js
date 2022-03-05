require("dotenv").config();


const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

const PORT = +process.env.PORT || 4500;

module.exports = {
  APP_ID: "d4ab5126",
  API_KEY: "299c01e42f474c75c83b393845adb756",
  BASE_URL: "https://api.adzuna.com/v1/api/jobs/",
  BASE_PARAMS: "search/1?&results_per_page=20&content-type=application/json",
};
