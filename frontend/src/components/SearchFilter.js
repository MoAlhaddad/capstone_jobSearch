import React, { useState, useEffect } from "react";
import JobApi from "../api/jobapi";

const filterItems = [
    { key: 1, label: "country"},
    { key: 2, label: "job_title"},
    { key: 3, label: "min_salary"},
    { key: 4, label: "max_salary"},
    { key: 5, label: "company_name"},
];

export default function SearchFilter({ jobList, setJoblist }) {
    const  [filter, setFilterForm] = useState({
        propertiesToFilter: {
            country: {
                values: "",
                active: false,
            },
            job_title: {
                values: "",
                active: false,
            },
            min_salary: {
                values: "",
                active: false,
            },
            max_salary: {
                values: "",
                active: false,
            },
            company_name: {
                values: "",
                active: false,
            },

        },
        typeOfComparison: "or",
    });

    const [selectedFilters, setSelectedFilters] = useState([]);
  const selectedFiltersSet = React.useRef(new Set());

  const handleChange = (evt) => {
    const target = evt.target;
    const targetId = target.id;
    const value = target.value;
    const copyOfFilters = Object.assign({}, filter);
    copyOfFilters.propertiesToFilter[targetId].value = value;
    setFilterForm(copyOfFilters);
  };

  const handleCheckboxChange = (evt) => {
    const target = evt.target;
    const value = target.checked;
    const copyOfFilters = Object.assign({}, filter);
    copyOfFilters.typeOfComparison = value ? "and" : "or";
    setFilterForm(copyOfFilters);
  };

  const onFilter = async (evt) => {
      evt.preventDefault();
      const jobResponse = await JobApi.filterJobs({
          filters: filter.propertiesToFilter,
          typeOfComparison: filter.typeOfComparison,
      });
      setJoblist(jobResponse.filteredJobs);
  };

  const resetToOriginalJobList = async (evt) => {
      evt.preventDefault();
      const jobResponse = await JobApi.getJobs();
      setFilterForm({
          
      })
  }
}