import React from "react"
import Axios from "axios";
import { API_URL } from "../../constants/API"
import { Link, Redirect } from "react-router-dom";
import swal from "sweetalert";
import { connect } from "react-redux";
import {
  todoInputHandler,
  usernameInputHandler,getUsernameHandler, loginHendler
  ,
} from "../../redux/actions";



class LoginScreen extends React.Component {
    state = {
        username: "",
        password: "",
        loginIs: false,
        loginPrifile:{},
      
    }
    inputHandler = (e, field) => {
        this.setState({ [field]: e.target.value });
    };
    getDataHandler = () => {
        const { username, password } = this.state

        const userData = {
            username,
            password
        }

        this.props.onLogin(userData)
      
    }
    render() {
        const {
            username,
            password,
            loginIs
        } = this.state

        if (!loginIs) {
            return (
                <div className="container d-flex flex-column justify-content-center align-items-center  mt-4 mb-2" style={{ width: 'auto' }}>
                    <h1 className="text-uppercase font-weight-bold" style={{ color: "green" }}>Login Page</h1>
                    <p>username : {this.props.user.username}</p>
                    <p>{this.props.user.errMsg}</p>
                    <div className="bg-grey">
                        <input type="text"
                            className="form-control p-2 mb-2"
                            name=""
                            id=""
                            placeholder="Username"
                            // value={usernameInput}
                            onChange={(e) => this.inputHandler(e, "username")}
                        />
                        <input type="password"
                            className="form-control p-2 mb-2"
                            name=""
                            id=""
                            // value={passwordInput}
                            placeholder="Password"
                            onChange={(e) => this.inputHandler(e, "password")}
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
                <Redirect to={'/home/' + username} />
            )

        }


    }
}
const mapStateToProps = (state) => {
    return {
    //   todo: state.haha,
      user: state.user,
    };
  };
  

  const mapDispatchToProps = {
    // onChangeTodo: todoInputHandler,
    onChangeUsername: usernameInputHandler,
    onLogin : getUsernameHandler,
    // onAddTodo: addTodoHandler,
    onLogin : loginHendler
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);