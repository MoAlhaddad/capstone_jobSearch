import React, { useState, useEffect } from "react";
import JobApi from "../api/jobapi";

const filterItems = [
  { key: 1, label: "job_title" },
  { key: 2, label: "min_salary" },
  { key: 3, label: "max_salary" },
  { key: 4, label: "description" },
  { key: 5, label: "company_name" },
];

export default function SearchFilter({ jobList, setJoblist }) {
  const [filter, setFilterForm] = useState({
    job_title: {
      value: "",
      active: false,
    },
    min_salary: {
      value: "",
      active: false,
    },
    max_salary: {
      value: "",
      active: false,
    },
    description: {
      value: "",
      active: false,
    },
    company_name: {
      value: "",
      active: false,
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
      propertiesToFilter: {
        job_title: {
          value: "",
          active: false,
        },
        min_salary: {
          value: "",
          active: false,
        },
        max_salary: {
          value: "",
          active: false,
        },
        description: {
          value: "",
          active: false,
        },
        company_name: {
          value: "",
          active: false,
        },
        country: {
          value: "",
          active: false,
        },
      },
      typeOfComparison: "or",
    });
    setJoblist(jobResponse.jobs);
  };

  return (
    <form
      style={{ display: "flex", justifyContent: "space-between" }}
      onSubmit={onFilter}
    >
      <div id={"search-filter"} style={{ display: "flex" }}>
        {filterItems.map((filterItem) => (
          <div
            key={filterItem.key}
            style={{ marginRight: "10px", display: "flex" }}
          >
            {selectedFilters.some((sf) => parseInt(sf) === filterItem.key) ? (
              <input
                id={filterItem.label}
                onChange={handleChange}
                placeholder={`By ${filterItem.label}`}
                value={filter.propertiesToFilter[filterItem.key]}
                style={{ padding: "5px", width: "100px" }}
              />
            ) : null}
            <button
              type="button"
              id={filterItem.key}
              onClick={(event) => {
                const copyOfFilters = Object.assign({}, filter);
                const hasSelectedFilter = selectedFiltersSet.current.has(
                  event.target.id
                );
                if (hasSelectedFilter) {
                  selectedFiltersSet.current.delete(event.target.id);
                  copyOfFilters.propertiesToFilter[
                    filterItem.label
                  ].active = false;
                } else {
                  selectedFiltersSet.current.add(event.target.id);
                  copyOfFilters.propertiesToFilter[
                    filterItem.label
                  ].active = true;
                }
                setSelectedFilters(Array.from(selectedFiltersSet.current));
                setFilterForm(copyOfFilters);
              }}
              className={`btn ${
                selectedFilters.some((sf) => parseInt(sf) === filterItem.key)
                  ? "active"
                  : "not-active"
              }`}
            >
              {filterItem.label}
            </button>
          </div>
        ))}
        <div>
          And
          <br /> Comparison
          <input
            type="Checkbox"
            checked={filter.typeOfComparison === "and"}
            onChange={handleCheckboxChange}
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "120px" }}
        >
          Filter
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          style={{ width: "120px" }}
          onClick={resetToOriginalJobList}
        >
          Reset
        </button>
      </div>
    </form>
  );
}
