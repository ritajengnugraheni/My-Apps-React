import React from 'react';

let hi = "hitesting"
const NewScreen = () =>{
    const ButtonHandler =() =>{
        alert ('you klik me!')
    }
 
    return (
        <div>
             <h1 style={{color: 'green'}}>hallo!!</h1>
             {/* <input type="button" value="klik coba" onClick={ButtonHandler}/>
             <KomponanBaru/> */}
        </div>
       
    )  
}



// const KomponanBaru =()=>{
//     return (
//         <div>
//             <h1>hallo aja</h1>
//             <p>{hi}</p>
//         </div>
        
//     )
// }
export default NewScreen;
