import React from 'react';
import {Link} from "react-router-dom";

class InputScreen extends React.Component{
    state ={
        username: '',
        email:'',
        text : ''
    }
    render(){
        const {username, email, text}= this.state
        const InputHandler =(event, field)=>{
            this.setState({[field]:event.target.value})
        }
 
        return (
            <div>
                <h1>Input Screen</h1>
                <h3>Welcome {username}</h3>
                <h3>Email : {email}</h3>
                <input type="text" 
                name="" 
                id="" 
                placeholder='Username'
                onChange ={(e) => InputHandler(e, 'username')}
                // onChange={InputHandler}
                />

                <br/>
                <input type="email" name="" id="" placeholder='E-mail'
                onChange ={(e) => InputHandler(e, 'email')}
                />
                <Link to={"/profil/"+username}>
                <input className='btn btn-info' type="button" value="Input" />
                </Link>
               
                <br/>
                
               
                <textarea onChange ={(e) => InputHandler (e, 'text')} name="" id="" cols="30" rows="10"></textarea>
                <p>{text.length}/140</p>

                
            </div>
        )
    }

}

export default InputScreen