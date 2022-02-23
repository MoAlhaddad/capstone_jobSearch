import React, { useState } from "react";
import { get } from "../api/ajaxCallCreators";
import JobApi from "../api/jobapi";

export default function JobList() {
    //set jobs

    const [jobs, setJobs] = useState([]);
    React.useEffect(() => {
        async function getJobs() {
            const jobResponse = await JobApi.getJobs();
            setJobs(jobResponse.jobs);
        }

        getJobs();
    }, []);

    return (
        <div>
            <h2> JobList</h2>
            
        </div>
    )
}