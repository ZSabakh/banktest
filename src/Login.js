import React, { useState } from "react";
import "./Login.css";
import { connect } from "react-redux";
import { PostData } from "./services/PostData";
import { Redirect } from "react-router-dom";
import * as actionCreators from "./store/actions/index";

function Login(props) {
  // constructor(props){
  //     super(props);
  //     this.state = {
  //         email:'',
  //         password:'',
  //         redirect: false
  //     }
  //     this.login = this.login.bind(this);
  //     this.onChange = this.onChange.bind(this);
  // }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const login = () => {
    if (email && password) {
      PostData("login", { email, password }).then((result) => {
        let responseJson = result;
        if (responseJson.token) {
          sessionStorage.setItem("token", responseJson.token);
          props.Authorize();
        } else {
          console.log({ email, password });
          console.log(result);
          console.log("Login Error");
        }
      });
    }
  };

  // login = () => {

  //     let formData = {
  //         email: "nikolozamgalo@gmail.com",
  //         password: "asdasd"
  //     }
  //     axios.post('https://account.cloud.com.ge/api/v1/login', formData)
  //         .then(response => {
  //             console.log(formData)
  //             console.log(response)
  //         })
  //         .catch(error => {
  //             // handle error
  //             console.log("error occured");
  //         })

  // }

  if (props.authorized) {
    return <Redirect to={"/dashboard/accounts"} />;
  }

  return (
    <html>
      <head>
        <title>Page Title</title>
      </head>
      <body>
        <div className="Head">
          <div className="Logo">
            <img
              src="https://media.glassdoor.com/sqll/635560/alfa-bank-squarelogo-1427264599917.png"
              alt="logo"
            />
          </div>
          <ul>
            <li>
              <u>NU</u>MB1
            </li>
            <li>
              <u>NU</u>MB2
            </li>
          </ul>
        </div>
        <div className="Lbox">
          <h1>Internet bank</h1>
          <nav>
            <p>Login</p>
            <p>Register</p>
          </nav>
          <div className="Input">
            <p>Name</p>
            <input
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <p>Password</p>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <ul>
              <li>
                <u>Get email</u>
              </li>
              <li>
                <u>Recover account</u>
              </li>
            </ul>
            <button className="myButton" onClick={login}>
              Login
            </button>
          </div>
        </div>
        <div className="Foot">
          <footer>
            <ul>
              <li>
                <u>Home</u>
              </li>
              <li>
                <u>Support</u>
              </li>
              <li>
                <u>Guide</u>
              </li>
              <li>
                <u>Mobile-Bank</u>
              </li>
            </ul>
            <p>2020 TestBank</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

const mapStateToProps = (state) => {
  return {
    authorized: state.account.authorized,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetAuthorized: () => dispatch(actionCreators.get_authorized()),
    Authorize: () => dispatch(actionCreators.authorize()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
