import React from "react"
import Axios from "axios";
import { API_URL } from "../../constants/API"
import { Link, Redirect } from "react-router-dom";
import swal from "sweetalert";
import { connect } from "react-redux";
import {
    todoInputHandler,
    usernameInputHandler, getUsernameHandler, loginHendler
    ,
} from "../../redux/actions";
import Cookie from 'universal-cookie';


const cookieObject = new Cookie()

class LoginScreen extends React.Component {
    state = {
        username: "",
        password: "",
        loginIs: false,
        loginPrifile: {},

    }
    inputHandler = (e, field) => {
        this.setState({ [field]: e.target.value });
    };

    // Masih agak kurang paham
    getDataHandler = () => {
        const { username, password } = this.state

        const userData = {
            username,
            password
        }

        this.props.onLogin(userData)
        
        this.setState ({
            usernameInput :"",
            passwordInput: ""

        })

    }
    //====================================

    //============== belajar cookie ===========
    // 1. Login dan ubah global state user menjadi data user 
    //   -> id, username, role , fullname 
    // 2. Check di app.js, jika global state user udah terisi dengan data user
    //    set cookie dengan data user 

    // 1. compnent did update akan ketrigger jika ada sebuah perubahan 
    //  -> update => perubahan state atau perubahan props 
    // 2. global state telah di map ke props melalui function mapStateToProps 
    //    dan diconnect 
    // 3. Berarti global state = props 
    // 4. Jika global state berubah, maka props juga akan berubah 
    // 5. Jika props berubah, componentDidUpdate akan ke trigger 

    componentDidUpdate() {
        // jika  this.props.user.id ada isi, berarti data seseorang sudah ada pada global state 
        if (this.props.user.id) { // jika menggunakan . username pun juga bisa 
            cookieObject.set("authData", JSON.stringify(this.props.user))
        } 
           
       
    }

    render() {
        const {
           usernameInput,
           passwordInput
        } = this.state

        if (!this.props.user.id) {
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
                            value={usernameInput}
                            onChange={(e) => this.inputHandler(e, "username")}
                        />
                        <input type="password"
                            className="form-control p-2 mb-2"
                            name=""
                            id=""
                            value={passwordInput}
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
                // <Redirect to={'/home/' + username} />
                <div className="container text-center">
                    <h1>ANDA SUDAH LOGIN</h1>
                </div>
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
    // onChangeUsername: usernameInputHandler,
    // onLogin1: getUsernameHandler,
    // onAddTodo: addTodoHandler,
    onLogin: loginHendler
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);