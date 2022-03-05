import React, { useState, useEffect } from "react";
import "./App.css";
import  Axios  from "axios";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import JobApi from "./api/jobapi";
import { BrowserRouter } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import Navigation from "./routes-nav/Navigation";
import Routes from "./routes-nav/Routes";
import jwt from "jsonwebtoken";
import { response } from "../../server/app";

function App() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState(false);

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password
    }).then((response) => {
      if (!response.data.auth) {
        setLoginStatus(false);
      } else {
        console.log(response.data);
        localStorage.setItem("token", "Bearer " + response.data.token)
        setLoginStatus(true);
      }
    });
  };

  const userAuthenticated = () => {
    Axios.get("http://localhost:3001/isUserAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response) => {
      console.log(response);
    });
  };
}

  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
          />
          <label>Password</label>
          <input
            type="text"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
            />
            <button onClick={register}>Register</button>
            </div>

            <div className="Login">
              <h1>Login</h1>
              <input
                type="text"
                placeholder="Username..."
                onChange={(e) =>{
                  setUsername(e.target.value);
                }}
                />
              <input 
                type="password"
                placeholder="Password..."
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                />
                <button onClick={login}> login </button>
              </div>

            {loginStatus && (
              <button onClick={userAuthenticated}>Check if Authenticated</button>
            )}
          </div>
  ); 
  


  const [infoLoaded, setInfoLoaded] = useState(false);
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  console.debug(
      "App",
      "infoLoaded=", infoLoaded,
      "currentUser=", currentUser,
      "token=", token,
  );

  // Load user info from API. Until a user is logged in and they have a token,
  // this should not run. It only needs to re-run when a user logs out, so
  // the value of the token is a dependency for this effect.

  useEffect(function loadUserInfo() {
    console.debug("App useEffect loadUserInfo", "token=", token);

    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          // put the token on the Api class so it can use it to call the API.
          JobApi.token = token;
          let currentUser = await JobApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setApplicationIds(new Set(currentUser.applications));
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }

    // set infoLoaded to false while async getCurrentUser runs; once the
    // data is fetched (or even if an error happens!), this will be set back
    // to false to control the spinner.
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  /** Handles site-wide logout. */
  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  /** Handles site-wide signup.
   *
   * Automatically logs them in (set token) upon signup.
   *
   * Make sure you await this function and check its return value!
   */
  async function signup(signupData) {
    try {
      let token = await JobApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  /** Handles site-wide login.
   *
   * Make sure you await this function and check its return value!
   */
  async function login(loginData) {
    try {
      let token = await JobApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  /** Checks if a job has been applied for. */
  function hasAppliedToJob(id) {
    return applicationIds.has(id);
  }

  /** Apply to a job: make API call and update set of application IDs. */
  function applyToJob(id) {
    if (hasAppliedToJob(id)) return;
    JobApi.applyToJob(currentUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  }

 

  return (
      <BrowserRouter>
          <div className="App">
            <Navigation logout={logout} />
            <Routes login={login} signup={signup} />
          </div>

      </BrowserRouter>
  );
  


    // const jobSearch = new JobSearch('#search-form', '.result-container', '.loading-element');
    //  jobSearch.setCountryCode();
    //  jobSearch.configureFormListener();
    //  useEffect(() => {
    //      //Tests endpoint.
    //      fetch("http://localhost:4500/api/getJobs?country=fr", {
    // //        method: "GET",
    // // //       mode: "cors",
    // // //       credentials: "same-origin",
    // // //       headers: {
    // // //         "Content-Type": "application/json",
    // // //         "Access-Control-Allow-Origin": "*",
    // // //       },
    // // //       type: "application/json",
    // // //     })
    // // //       .then((response) => response.json())
    // // //       .then((responseJSON) => console.log("RESPONSE:", responseJSON.jobs))
    // // //       .catch((error) => console.log("ERROR:", error));
    // // //   }, []);
    // // //   return (
    // // //     <div className="App">
    // // //       <header className="App-header">
    // // //         <img src={logo} className="App-logo" alt="logo" />
    // // //         <p>
    // // //           Edit <code>src/App.js</code> and save to reload.
    // // //         </p>
    // // //         <a
    // // //           className="App-link"
    // // //           href="https://reactjs.org"
    // // //           target="_blank"
    // // //           rel="noopener noreferrer"
    // // //         >
    // // //           Learn React
    // // //         </a>
    // // //       </header>
    // // //     </div>
    // // //   );
    // //  }

export default App;
