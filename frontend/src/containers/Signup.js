import React, { useState } from "react";
import { Tabs, Tab, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import "./Signup.scss";

const defaultRegistrationFields = {
  email: "",
  password: "",
  confirmPassword: "",
  confirmationCode: "",
};

const defaultLoginFields = {
  email: "",
  password: "",
};

export default function Signup() {
  //Set registration fields
  const [registrationEmail, setRegisterationEmail] = useState("");
  const [registrationPassword, setRegisterationPassword] = useState("");
  const [registrationConfirmPassword, setRegistrationConfirmPassword] =
    useState("");

  //Set login fields
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [selectedTab, setSelectedTab] = useState("login");
  const history = useHistory();
  const [newUser, setNewUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  /* Handle registration input changes */
  function handleRegistrationEmailChange(evt) {
    setRegisterationEmail(evt.target.value);
  }

  function handleRegistrationPasswordChange(evt) {
    setRegisterationPassword(evt.target.value);
  }

  function handleRegistrationConfirmPasswordChange(evt) {
    setRegistrationConfirmPassword(evt.target.value);
  }

  /* Handle login input changes */
  function handleLoginEmailChange(evt) {
    setLoginEmail(evt.target.value);
  }
  function handleLoginPasswordChange(evt) {
    setLoginPassword(evt.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    let userToSetInLocalStorage = { email: "", password: "" };
    //When the user register or login's. Reset it's corresponding inputs.
    if (selectedTab === "signup") {
      setRegisterationEmail("");
      setRegisterationPassword("");
      setRegistrationConfirmPassword("");
      userToSetInLocalStorage.email = registrationEmail;
      userToSetInLocalStorage.password = registrationPassword;
    } else {
      setLoginEmail("");
      setLoginPassword("");
      userToSetInLocalStorage.email = loginEmail;
      userToSetInLocalStorage.password = loginPassword;
    }

    setIsLoading(false);

    setNewUser(userToSetInLocalStorage); //Set the user to the registrationFields typed,

    localStorage.setItem("user", JSON.stringify(userToSetInLocalStorage)); //Setting the local storage with the user object.

    history.push("/");
  }

  function handleTabSelect(selectedTab) {
    setSelectedTab(selectedTab);
  }

  const isLoginTabSelected = selectedTab === "login";
  const isSignupTabSelected = selectedTab === "signup";
  return (
    <div className="Signup">
      <div className="wrapper">
        <div className="title-text">
          <div
            className="title login"
            style={{ display: isLoginTabSelected ? "initial" : "none" }}
          >
            Login Form
          </div>
          <div
            className="title signup"
            style={{ display: isSignupTabSelected ? "initial" : "none" }}
          >
            Signup Form
          </div>
        </div>
        <div
          id="signup-form-container"
          className="form-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Tabs
            id="slider-tabs"
            activeKey={selectedTab}
            onSelect={(k) => handleTabSelect(k)}
          >
            <Tab eventKey="login" title="Login">
              <div className="form-inner">
                <form
                  action="#"
                  className="login"
                  style={{
                    display: selectedTab === "login" ? "initial" : "none",
                  }}
                  onSubmit={handleSubmit}
                >
                  <div className="field">
                    <input
                      type="text"
                      placeholder="Email Address"
                      value={loginEmail}
                      onChange={handleLoginEmailChange}
                      required
                    />
                  </div>
                  <div className="field">
                    <input
                      type="password"
                      placeholder="Password"
                      value={loginPassword}
                      onChange={handleLoginPasswordChange}
                      required
                    />
                  </div>
                  <div className="pass-link">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div className="field-btn">
                    <div className="btn-layer"></div>
                    <Button type="submit" variant="success">
                      Login
                    </Button>
                  </div>
                  <div className="signup-link">
                    Not a member?{" "}
                    <button
                      type="button"
                      onClick={() => handleTabSelect("signup")}
                    >
                      Signup now
                    </button>
                  </div>
                </form>
              </div>
            </Tab>
            <Tab eventKey="signup" title="Signup">
              <div className="form-inner">
                <form
                  action="#"
                  className="signup"
                  style={{
                    display: selectedTab === "signup" ? "initial" : "none",
                  }}
                  onSubmit={handleSubmit}
                >
                  <div className="field">
                    <input
                      type="text"
                      placeholder="Email Address"
                      value={registrationEmail}
                      onChange={handleRegistrationEmailChange}
                      required
                    />
                  </div>
                  <div className="field">
                    <input
                      type="password"
                      placeholder="Password"
                      value={registrationPassword}
                      onChange={handleRegistrationPasswordChange}
                      required
                    />
                  </div>
                  <div className="field">
                    <input
                      type="password"
                      placeholder="Confirm password"
                      value={registrationConfirmPassword}
                      onChange={handleRegistrationConfirmPasswordChange}
                      required
                    />
                  </div>
                  <div className="field-btn" style={{ marginTop: "10px" }}>
                    <div className="btn-layer"></div>
                    <Button type="submit" variant="success">
                      Signup
                    </Button>
                  </div>
                </form>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
