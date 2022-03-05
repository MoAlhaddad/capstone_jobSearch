import React, { useState } from "react";
import JobApi from "../api/jobapi";
import Paginate from "../components/Paginate";

export default function FavoriteJobs() {
    //set Jobs
    const [jobs, setJobs] = useState([]);
    React.useEffect(() => {
        async function getFavoriteJobs() {
           const jobResponse = await JobApi.getFavoriteJobs();
           setJobs(jobResponse.jobs);

        }

        getFavoriteJobs();
    }, []);

    return (
        <div>
            <h2>Favorite JobList </h2>

            <Paginate jobList={jobs} displayFavoriteJobColumn={false} />

             {/* <div style={{ display: "flex", flexWrap: "wrap" }}>
             {jobs && jobs.map((job) => <Card key={job.id} {...job} />)}
    </div> */}
        </div>
    )
}