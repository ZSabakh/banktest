import React, {Component} from 'react';
import './Login.css';
import {PostData} from './services/PostData';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            redirect: false
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }



    onChange(e){
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state);
    }

    login = () => {
        if(this.state.email && this.state.password){
            PostData('login', this.state).then ((result) => {
                let responseJSON = result;
                if(responseJSON.userData) {
                    sessionStorage.setItem(userData, responseJSON);
                        console.log(responseJSON);
                    this.setState({redirect: true});
                }
                else {
                    console.log(this.state)
                    console.log(result)
                    console.log('Login Error')
                }
            })
        }

    }

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

    render(){

        if(this.state.redirect){
            return(<Redirect to={'/'} />)
        }


        return(
            <html>
            <head>
            <title>Page Title</title>
            </head>
            <body>
            <div className="Head">
            <div className="Logo"><img src="https://media.glassdoor.com/sqll/635560/alfa-bank-squarelogo-1427264599917.png"/></div>
            <ul>
                <li><u>NU</u>MB1</li>
                <li><u>NU</u>MB2</li>
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
                <input type="text" name="email" onChange={this.onChange}></input>
            <p>Password</p>
            <input type="password" name="password" onChange={this.onChange}></input>
            <ul>
                <li><u>Get email</u></li>
                <li><u>Recover account</u></li>
            </ul>
            <button className="myButton" onClick={this.login}>Login</button>
            </div>
            </div>
            <div className="Foot">
            <footer>
                <ul>
                    <li><u>Home</u></li>
                    <li><u>Support</u></li>
                    <li><u>Guide</u></li>
                    <li><u>Mobile-Bank</u></li>
                </ul>
                <p>2020 TestBank</p>
            </footer>
            </div>
            </body>
            </html>
        )
    }
}

export default Login