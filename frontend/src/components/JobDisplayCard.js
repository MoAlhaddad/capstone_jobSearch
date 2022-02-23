import React from "react";
import { Card as BootstrapCard } from "react-bootstrap";
//Import format  from "date-fns/format"
import "./JobDisplayCardStyles.scss";

export default function Card({

    id,
    country,
    job_title,
    min_salary,
    max_salary,
    description,
    company_name
}) {
    return (
        <BootstrapCard key={id} className="Jobdisplay-card">
            <BootstrapCard.Header>{job_title}</BootstrapCard.Header>
            <BootstrapCard.body>
                Company_Name: {company_name}
                <br />
                Min_Salary: {min_salary}
                <br />
                Max_Salary: {max_salary}
                <br />
                Description: {description}
                <br />
                Country: {country}
                <br />
            </BootstrapCard.body>

        </BootstrapCard>
    );
}