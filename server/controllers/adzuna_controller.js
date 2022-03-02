const config = require("/..config");
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
};
