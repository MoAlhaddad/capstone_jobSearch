import React from "react";
import { Card as BootstrapCard } from "react-bootstrap";
// import format from "date-fns/format";
import "./JobScoreCardStyles.scss";

export default function Card({
    key,
    company_name,
      min_salary,
      job_title,
      max_salary,
      country,
      description,
}) {
    return (
        <BootstrapCard key={key} className="Jobfind-card">
            <BootstrapCard.Header>{job}</BootstrapCard.Header>
            <BootstrapCard.Body>
                Company: {company_name}
                <br />
                 Job Title: {job_title}
                 <br />
                 Min Salary: {min_salary}
                 <br />
                 Max Salary: {max_salary}
                 <br />
                 Description: {description}
                 <br />
                 Country: {country}
                 <br />
            </BootstrapCard.Body>
            <BootstrapCard.Footer>Date Created: {date_created}</BootstrapCard.Footer>
        </BootstrapCard>
    );
}