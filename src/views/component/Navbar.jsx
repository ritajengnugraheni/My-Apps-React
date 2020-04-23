import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logoutHandler } from "../../redux/actions"
import cookie from "universal-cookie"

const cookiesObject = new cookie()

class Navbar extends React.Component {

    perintahLogout = () => {
        // alert('masuk')
        // const { username, password } = this.state

        this.props.logoutHandler()
        cookiesObject.remove("authData")


    }
    showButton = () => {
        if (this.props.user.id) {
            return (
                <input
                    type="button"
                    className="btn btn-success"
                    value="Logout"
                    onClick={this.perintahLogout}

                />
            )
        } else {
            return (
                null
            )
        }
    }
    render() {
        return (
            <div className="d-flex justify-content-around align-items-center" style={{ height: '80px' }}>
                <Link style={{ color: "green" }} to="/regis">Register</Link>
                <Link style={{ color: "green" }} to="/login" >Login</Link>
                {/* <Link to="/counter" >Counter</Link>
                <Link to="/profil/:username" >Profile</Link> */}
                {this.props.user.username}
                {this.showButton()}


            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        todo: state.todo,
        user: state.user
    }
}

const mapDispathToProps = {
    logoutHandler,
}
export default connect(mapStateToProps, mapDispathToProps)(Navbar)