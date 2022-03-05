import React from "react";
import JobApi from "../api/jobapi";
import JobScoreCard from "../components/JobScoreCard";

export default function RandomJobList() {
    const [jobs, setJobs] = React.useState([]);
    React.useEffect(() => {
        async function getRandomJobs() {
            const jobResponse = await JobApi.getRandomJobs();
            setJobs(jobResponse?.randomJobs);
        }

        getRandomJobs();
    }, []);

    return (
        <div>
            <h1 id="title">Recommendations</h1>
            <div style={{ display: "flex", flex: "0 20%"}}>
                {jobs.length &&
                 jobs.map((job) => <JobScoreCard key={job.id} {...job} />)}
            </div>
        </div>
    );
}