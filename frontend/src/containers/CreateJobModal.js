import React from "react";
import { Modal as BootstrapModal, ModalBody } from "react-bootstrap";
import JobApi from "../api/jobapi";
import "./CreateJobModalStyles.scss";

// const countries = {
//    id:
//}

function CreateJobModal({ openModal, setOpenModal }) {
    const [createJobForm, setCreateJobForm] = React.useState({

         country: "1",
         job_title: "",
         min_salary: "",
         max_salary: "",
         description: "",
         company_name: ""


    });

    const [selectCountries, setSelectCountries] = React.useState([]);

    React.useEffect(() => {
        async function getLkCountries() {
            const lkCountriesResponse = await JobApi.getJobCountries();

            setSelectCountries(lkCountriesResponse.lkCountries);
        }

        getLkCountries();
    }, []);


    const handleChange = (evt) => {
        const target = evt.target;
        const value = target.type == "checkbox" ? target.checked : target.value;
        const name = target.name;
        const copyOfForm = Object.assign({}, createJobForm);
        copyOfForm[name] = value;
        setCreateJobForm(copyOfForm);
      };

      const createJob = async (evt) => {
          evt.preventDefault();

          const createJobResponse = await JobApi.createJob(createJobForm);

          if (createJobResponse.sucess) {
              setCreateJobForm({
                country: "1",
                job_title: "",
                min_salary: "",
                max_salary: "",
                description: "",
                company_name: "" 
              });

             oncancel();
             
          }
      };
      const onCancel = () => setOpenModal(false);
      return (
        <BootstrapModal
          show={openModal}
          toggle={() => setOpenModal(!openModal)}
          size="lg"
        >
          <form onSubmit={createWine} id="createJobForm">
            <BootstrapModal.Header>
              <h2>Add Job</h2>
            </BootstrapModal.Header>
            <BootstrapModal.Body
              style={{ display: "flex", flexDirection: "column", padding: "10px" }}
            >
              <input
                name="job_title"
                placeholder="insert your job titlr here"
                value={createJobForm.job_title}
                onChange={handleChange}
              />
              <input
                name="min_salary"
                placeholder="insert your min salary here"
                value={createJobForm.min_salary}
                onChange={handleChange}
              />
              <input
                name="max_salary"
                placeholder="insert your max salary here"
                value={createJobForm.max_salary}
                onChange={handleChange}
              />
              <input
                name="Country"
                placeholder="insert your ci here"
                value={createWineForm.country}
                onChange={handleChange}
              />
              <input
                name="Company"
                placeholder="insert your Company name here"
                value={createJobForm.company_name}
                onChange={handleChange}
              />
              <select name="country" onChange={handleChange}>
                {selectCountries.length &&
                  selectCountries.map((selectCountry, idx) => (
                    <option key={idx} value={selectCountry.value}>
                      {selectCountry.label}
                    </option>
                  ))}
              </select>
              <div id="check2" class="checkbox-container">
                <label>
                  is my Starred Job?
                  <input
                    type="checkbox"
                    id="checkboxid2"
                    checked={createJobForm.isFavoriteJob}
                    name="isFavoriteJob"
                    onChange={handleChange}
                  />
                </label>
              </div>
            </BootstrapModal.Body>
            <BootstrapModal.Footer>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ maxWidth: "170px" }}
              >
                Add Job
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="btn btn-danger"
                style={{ width: "120px" }}
              >
                Cancel
              </button>
            </BootstrapModal.Footer>
          </form>
        </BootstrapModal>
      );
    }
    


