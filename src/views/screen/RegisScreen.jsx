import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API"

class RegisScreen extends React.Component {
    state = {
        usernameInput: "",
        passwordInput: "",
        fullnameInput: "",
        roleInput: "",
        userList: []
    }

    inputHandler = (e, field) => {
        this.setState({ [field]: e.target.value });
    };

    getDataHandler = () => {
        const { usernameInput } = this.state
        Axios.get(`${API_URL}/users`, {
            params: {
                username: usernameInput
            }
        })
            .then((res) => {
                if (res.data.length == 0) {
                    alert("SUCCESS")
                    this.postDataHandler()
                      this.setState({
                        usernameInput: "",
                        passwordInput: "",
                        roleInput: "",
                        fullnameInput: ""
                    })
                } else {
                    alert("Username sudah digunakan")
                    this.setState({
                        usernameInput: "",
                        passwordInput: "",
                        roleInput: "",
                        fullnameInput: ""
                    })
                }
                console.log(res);

            })
            .catch((err) => {
                console.log(err);

            })
    }
    postDataHandler = () => {
        const { usernameInput, passwordInput, fullnameInput, roleInput } = this.state
        Axios.post(`${API_URL}/users`, {
            username: usernameInput,
            password: passwordInput,
            role: roleInput,
            fullname: fullnameInput
        })

            .then((res) => {
                console.log(res);

            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        const {
            usernameInput,
            passwordInput,
            fullnameInput,
            roleInput
        } = this.state
        return (
            <div className="container d-flex flex-column justify-content-center align-items-center  mt-4 mb-2" style={{ width: 'auto' }}>
                <h1 className="text-uppercase font-weight-bold" style={{ color: "green" }}>Regis Page</h1>
                <div className="bg-grey">
                    <input type="text"
                        className="form-control p-2 mb-2"
                        name=""
                        id=""
                        placeholder="Username"
                        value={usernameInput}
                        onChange={(e) => this.inputHandler(e, "usernameInput")} />
                    <input type="text"
                        className="form-control p-2 mb-2"
                        name=""
                        id=""
                        value={fullnameInput}
                        placeholder="Full Name"
                        onChange={(e) => this.inputHandler(e, "fullnameInput")} />
                    <input type="text"
                        className="form-control p-2 mb-2"
                        name=""
                        id=""
                        value={roleInput}
                        placeholder="Role Job"
                        onChange={(e) => this.inputHandler(e, "roleInput")} />
                    <input type="text"
                        className="form-control p-2 mb-2"
                        name=""
                        id=""
                        value={passwordInput}
                        placeholder="Password"
                        onChange={(e) => this.inputHandler(e, "passwordInput")} />
                    <center>
                        <input
                            type="button"
                            className="btn btn-success"
                            value="Registrasi"
                            onClick={this.getDataHandler} />
                    </center>

                </div>

            </div>
        )

    }
}

export default RegisScreen