import React from "react"
import Axios from "axios";
import { API_URL } from "../../constants/API"
import {Link, Redirect} from "react-router-dom";

class LoginScreen extends React.Component {
    state = {
        usernameInput: "",
        passwordInput: "",
        // userList: [],
        loginIs: true,
        usernameSekarang:""
    }
    inputHandler = (e, field) => {
        this.setState({ [field]: e.target.value });
    };
    getDataHandler = () => {
        const { usernameInput, passwordInput} = this.state
        Axios.get(`${API_URL}/users`, {
            params: {
                username: usernameInput,
                password: passwordInput,
            }
        })

            .then((res) => {
                if (res.data.length == 0) {
                    alert('Password atau username salah!')
                    this.setState({
                        loginIs: true,
                        usernameInput: "",
                        passwordInput: "",
                        roleInput: "",
                        fullnameInput: ""
                    })
                } else {
                    this.setState({
                        loginIs: false,
                        usernameSekarang : usernameInput,
                        usernameInput: "",
                        passwordInput: "",
                        roleInput: "",
                        fullnameInput: ""
                    })
                    // this.setState({ userList: res.data })
                    alert("SUCCESS!")
                    console.log(res);
                }

            })

            .catch((err) => {
                console.log(err);

            })
    }
    render() {
        const {
            usernameInput,
            passwordInput,
            usernameSekarang,
            loginIs
        } = this.state

        if (loginIs) {
            return (
                <div className="container d-flex flex-column justify-content-center align-items-center  mt-4 mb-2" style={{ width: 'auto' }}>
                    <h1 className="text-uppercase font-weight-bold" style={{ color: "green" }}>Login Page</h1>
                    <div className="bg-grey">
                        <input type="text"
                            className="form-control p-2 mb-2"
                            name=""
                            id=""
                            placeholder="Username"
                            value={usernameInput}
                            onChange={(e) => this.inputHandler(e, "usernameInput")}
                        />
                        <input type="password"
                            className="form-control p-2 mb-2"
                            name=""
                            id=""
                            value={passwordInput}
                            placeholder="Password"
                            onChange={(e) => this.inputHandler(e, "passwordInput")}
                        />
                        <center>
                            {/* <Link to='/home'> */}
                            <input
                                type="button"
                                className="btn btn-success"
                                value="Login"
                                onClick={this.getDataHandler}
                            />
                            {/* </Link> */}
                          
                        </center>

                    </div>

                </div>
            )
        } else {
            return (
                <Redirect to={'/home/'+ usernameSekarang}/>
            )
            
        }


    }
}
export default LoginScreen