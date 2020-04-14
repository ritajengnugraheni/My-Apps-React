import React from "react";

// const CounterScreen =(props)=>{
//     return (
//         <div>
//             <h1>{props.kota}</h1>
//         </div>
//     )
// }

// class CounterScreen extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>{this.props.kota}</h1>
//             </div>
//         )
//     }
// }

//Coret2 an 
// class Human {
//     constructor(a, b, c){
//         this.namaBelakang =a
//         this.namaDepan=b

//     }
// }

//=====================================================
class CounterScreen extends React.Component{
    state = {
        counter:1,
        counter2:1,
        counter3:1

    }
    render(){
        // const {counter,counter1,counter2}= this.state
        
        // let test =1;
        // setInterval(() => {
        //     test +=1;
        //     console.log(test);
            
        // },1000)
        
        return(
            <div>
                <div className="row">
                    <div className="col-4">
                         <h1>Counter 1 = {this.state.counter}</h1>
                         <input className='btn btn-info'
                         type="button" value="(+)" onClick ={()=>this.setState({counter:this.state.counter+1})}/>
                          <input className='btn btn-warning'
                         type="button" value="(-)"onClick ={()=>this.setState({counter:this.state.counter-1})}/>
                    </div>
                    <div className="col-4">
                         <h1>Counter 2 = {this.state.counter2}</h1>
                         <input className='btn btn-info'
                         type="button" value="(+)" onClick ={()=>this.setState({counter2:this.state.counter2+1})}/>
                          <input className='btn btn-warning'
                         type="button" value="(-)"onClick ={()=>this.setState({counter2:this.state.counter2-1})}/>
                    </div>
                    <div className="col-4">
                         <h1>Counter 3 = {this.state.counter3}</h1>
                         <input className='btn btn-info'
                         type="button" value="(+)" onClick ={()=>this.setState({counter3:this.state.counter3+1})}/>
                          <input className='btn btn-warning'
                         type="button" value="(-)"onClick ={()=>this.setState({counter3:this.state.counter3-1})}/>
                    </div>
                </div>
               <h6>All counter</h6>
               <input className='btn btn-info'
                 type="button" value="(+)" onClick ={()=>this.setState({counter3:this.state.counter3+1, counter : this.state.counter+1, counter2: this.state.counter2+1})}/>
               <input className='btn btn-warning'
                 type="button" value="(-)"onClick ={()=>this.setState({counter3:this.state.counter3-1, counter : this.state.counter-1, counter2: this.state.counter2-1})}/>
              
               <input className='btn btn-primary' 
               type="button" 
               value="reset"
               onClick={()=>this.setState({counter: this.state.counter=0, counter2:this.state.counter1=0, counter3: this.state.counter2=0})}/>
            </div>
        )
    }
}
export default CounterScreen