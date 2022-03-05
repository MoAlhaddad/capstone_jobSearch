import React, { useState } from "react";
import JobApi from "../api/jobapi";
import SearchFilter from "../components/SearchFilter";
import Paginate from "../components/Paginate";

export default function JobList() {
  //Set jobs
  const [jobs, setJobs] = useState([]);
  React.useEffect(() => {
    async function getJobs() {
      const wineResponse = await JobApi.getJobs();
      setJobs(jobResponse.jobs);
    }

    getJobs();
  }, []);

  return (
    <div>
      <h2> Job App List </h2>
      <SearchFilter jobList={jobs} setJoblist={setJobs} />
      <Paginate jobList={jobs} displayFavoriteJobColumn={true} />
    </div>
  );
}
