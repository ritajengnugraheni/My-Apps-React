import React from 'react'

class LoginScreen extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            person :[],
            username:'',
            password:'',
            repeatpass:'',
            teks : ""
        }
    }
   
    render(){
        const {username, password, repeatpass}= this.state
        const personBaru = {'username' : username, 'password' : password, 'repeatpass' : repeatpass}
        let submit = this.state.person.concat(personBaru)

        const InputHandler =(event, field)=>{
            this.setState({[field]:event.target.value})
        }

        const LoginHandler =(event, field)=>{
            this.setState({[field]:event.target.value})
        }
     
            
        const Register =()=>{
            
            this.setState({person : submit})

            console.log(this.state.person);
            if (password !== repeatpass){
                return alert ('Mohon maaf password tidak sama silahkan ulang')
            } else {
                return alert ('Registrasi berhasil')
            }
        }
        
      

       const loginweb =()=> {
        //    alert('cek Masuk')
           const usernameInput = this.state.username
           const passwordInput = this.state.password

           var findUser = this.state.person.find(val=>{
               return val.username == usernameInput
           })

           var indexUser=this.state.person.findIndex((val)=>{
               return val.username == usernameInput
           })
           
           var indexPassword=this.state.person.findIndex(val=>{
               return val.password == passwordInput
           })
           
           console.log(this.state.person);
           
           {
               indexUser == indexPassword && findUser ?
                this.setState({teks : `Hallo ${usernameInput.toUpperCase()}`}): alert ('username atau password salah')
           }
           
           
       }
        return(
        <div className="container  d-flex flex-column justify-content-center align-items-center  mt-4 mb-2" style={{width:'auto'}}>

                    <div className='bg-grey '>
                        <h5>Register</h5>
                        
                            <input   className='form-control mb-2'  type="text" name="" id="" placeholder="Username" onChange={(e) => InputHandler(e, 'username')} />
                            <input className='form-control mb-2' type="text" name="" id="" placeholder= "Password" onChange={(e) => InputHandler(e, 'password')} />
                            <input   className='form-control mb-2' type="text" name="" id="" placeholder="Repeat Password " onChange={(e) => InputHandler(e, 'repeatpass')} />
                            <input className='btn btn-info mb-2' type="button" value="Register" onClick={Register}/>
                     </div>
                     <div className='bg-grey'>
                            <h5>Login</h5>
                            <input className='form-control mb-2' type="text" name="" id="" placeholder="Username" onChange={(e)=>LoginHandler(e,'username')}/>
                            <input className='form-control mb-2'  type="password" name="" id="" placeholder= "Password" onChange={(e)=> LoginHandler(e,'password' )}/>
                            <input style={{margin: '5px'}} className='btn btn-info' type="button" value="Login" onClick={loginweb}/>
                    </div>
                            <h5>{this.state.teks}</h5>
        </div>
           
             
            
    
      
        )
    }



}

export default LoginScreen