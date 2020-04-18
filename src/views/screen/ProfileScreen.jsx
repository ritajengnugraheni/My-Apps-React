import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API"

class ProfileScreen extends React.Component {
    state = {
        userList: [],
    }
    getDataHandler = () => {

         Axios.get('http://localhost:3001/users')
            .then((res) => { //res=respon
                console.log(res.data);
                this.setState({userList :res.data})


            })
            .catch((err) => { //err=error
                console.log(err);

            })

        // request get by id 
        // ID diletakan setelah '/' milik nama table 
        // Axios.get('http://localhost:3001/users/1')
        //     .then((res) => { //res=respon
        //         console.log(res.data);
        //         this.setState({userList :res.data})


        //     })
        //     .catch((err) => { //err=error
        //         console.log(err);

        //     })

        // Axios.get('http://localhost:3001/users', {
        //     params :{
        //         id:1,

        //     }
        // })
        //     .then((res) => { //res=respon
        //         console.log(res.data);
        //         this.setState({ userList: res.data })


        //     })
        //     .catch((err) => { //err=error
        //         console.log(err);

        //     })
        console.log('bukan axios');
    }

    deleteDataHandler = () => {
        Axios.delete(`${API_URL}/users/1`)
            .then((res) => {
                console.log(res);

            })
            .catch((err) => {
                console.log(err);

            })
    }
    postDataHandler = () => {
        Axios.post(`${API_URL}/users`, {
            username: 'Bill',
            password: 'password',
            role: 'admin',
            fullName: 'Bill Gates'
        })
            .then((res) => {
                console.log(res);

            })
            .catch((err) => {
                console.log(err);

            })
    }
    render() {
        return (
            <div className="container">
                <h1>Profile</h1>
                <h2>Welcome, {this.props.match.params.username}</h2>
                <input type="button"
                    value="Get Data"
                    className="btn btn-success"
                    onClick={this.getDataHandler}
                />
                <input type="button"
                    value="Delete Data"
                    className="btn btn-danger"
                    onClick={this.deleteDataHandler}
                />
                <input type="button"
                    value="Post Data"
                    className="btn btn-primary"
                    onClick={this.postDataHandler}
                />
            </div>
        )
    }
}

export default ProfileScreen