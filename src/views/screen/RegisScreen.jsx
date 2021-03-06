import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API"
import {Button ,Spinner} from "reactstrap"
import swal from "sweetalert";
import { connect } from "react-redux";
import {
 registerHandler,loginHendler
} from "../../redux/actions";

class RegisScreen extends React.Component {
    state = {
        username: "",
        password: "",
        fullname: "",
        role: "",
        isLoading:false,
        // userList: []
    }

    

    inputHandler = (e, field) => {
        this.setState({ [field]: e.target.value });
    };

   
    
    getDataHandler = () => {

        const { username, password, fullname, role } = this.state
        
        const userData ={
            username,
            password,
            fullname,
            role
        }
        this.props.onRegis(userData)
        this.setState ({
            usernameInput:"",
            passwordInput:"",
            fullnameInput:"",
            roleInput:""
        })
        // this.setState({ isLoading: true });
        // const { usernameInput } = this.state
        // setTimeout(() => {
        //     Axios.get(`${API_URL}/users`, {
        //         params: {
        //             username: usernameInput
        //         }
        //     })
        //         .then((res) => {
        //             if (res.data.length == 0) {
        //                 swal("Success!", "", "success")
        //                 this.postDataHandler()
        //                   this.setState({
        //                     usernameInput: "",
        //                     passwordInput: "",
        //                     roleInput: "",
        //                     fullnameInput: "",
        //                     isLoading:false
        //                 })
        //             } else {
        //                 swal("Username sudah digunakan", " ", "error")
        //                 this.setState({
        //                     usernameInput: "",
        //                     passwordInput: "",
        //                     roleInput: "",
        //                     fullnameInput: "",
        //                     isLoading:false
        //                 })
        //             }
        //             console.log(res);
    
        //         })
        //         .catch((err) => {
        //             console.log(err);
        //             this.setState({isLoading:false})
    
        //         })
        // }, 1500);
      
    }
    // postDataHandler = () => {
    //     const { usernameInput, passwordInput, fullnameInput, roleInput } = this.state
    //     Axios.post(`${API_URL}/users`, {
    //         username: usernameInput,
    //         password: passwordInput,
    //         role: roleInput,
    //         fullname: fullnameInput
    //     })

    //         .then((res) => {
    //             console.log(res);

    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }

   
       
    
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
                <p>username : {this.props.user.username}</p>
                <p> {this.props.user.errMsg}</p>
                {/* <p>role: {this.props.user.role}</p> */}
                <p></p>
                <div className="bg-grey">
                    <input type="text"
                        className="form-control p-2 mb-2"
                        name=""
                        id=""
                        placeholder="Username"
                        value={usernameInput}
                        onChange={(e) => this.inputHandler(e, "username")} />
                    <input type="text"
                        className="form-control p-2 mb-2"
                        name=""
                        id=""
                        value={fullnameInput}
                        placeholder="Full Name"
                        onChange={(e) => this.inputHandler(e, "fullname")} />
                    <input type="text"
                        className="form-control p-2 mb-2"
                        name=""
                        id=""
                        value={roleInput}
                        placeholder="Role Job"
                        onChange={(e) => this.inputHandler(e, "role")} />
                    <input type="text"
                        className="form-control p-2 mb-2"
                        name=""
                        id=""
                        value={passwordInput}
                        placeholder="Password"
                        onChange={(e) => this.inputHandler(e, "password")} />
                    <center>
                        
                            <input
                            type="button"
                            className="btn btn-success"
                            value="Registrasi"
                            onClick={this.getDataHandler}
                            // disabled={this.state.isLoading}
                            />
                        
                     
                    </center>

                </div>

            </div>
        )

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
    // onLogin : getUsernameHandler,
    // onAddTodo: addTodoHandler,
    onLogin : loginHendler,
    onRegis : registerHandler
  };

// export default RegisScreen
export default connect (mapStateToProps, mapDispatchToProps)(RegisScreen)
