import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux'

class Navbar extends React.Component {
    render(){
        return (
            <div className="d-flex justify-content-around align-items-center" style={{height:'80px'}}>
                <Link style={{color:"green"}} to="/regis">Register</Link>
                <Link style={{color:"green"}} to="/login" >Login</Link>
                {/* <Link to="/counter" >Counter</Link>
                <Link to="/profil/:username" >Profile</Link> */}
                {this.props.todo.todoInput}
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        todo: state.todo,
    }
}
export default connect(mapStateToProps)(Navbar)