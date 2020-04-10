import React from "react"


import { render } from "react-dom";


 const BookCard = (props)=> {
     const {namaBuku}=props 
     const {author, title, review, desc, price, discount, image, stock}= namaBuku

     const renderItem =()=>{
         if (stock){
             return (

                 <>

                 <p className='font-color-grey'>{author}</p>
                 <h4 className='font-weight-bold pb-0'style={{fontSize: '20px'}}>{title}</h4>
                 <p style={{fontSize:'12px'}}><span >&#11088;</span>  {review}/5 Review</p>
                 <input className='tersedia' style={{fontSize:'10px'}} type="button" value="Available" disabled/>
                 <p style={{fontSize:'14px'}}>{desc}</p>
                 {
                     discount >0 ?(
                         <p>
                             <text className='font-weight-bold ' style={{marginRight:'15px'}}>${(price-((discount/100)*price)).toFixed(2)}</text>
                             <text className='font-color-grey pb-4' style={{textDecorationLine:'line-through'}}> ${price} </text>
                         </p>
                     ): <p>
                         <text className='font-weight-bold pb-4'>${price}</text> 
                     </p> 
                 }
                 <input className='btn-blue' type="button" value="Buy Now" />
                 </>
             )
           
         } else {
             return(
                 <>
                 <p className='font-color-grey'>{author}</p>
                 <h4 className='font-weight-bold' style={{fontSize: '20px'}}>{title}</h4>
                 <p style={{fontSize: '12px'}}><span>&#11088;</span>  {review}/5 Review</p>
                 <input className='habis' style={{fontSize:'10px'}} type="button" value="Sold Out" disabled/>
                 <p style={{fontSize:'14px'}}>{desc}</p>
                 {
                     discount >0 ?(
                         <p>
                             <text className='font-weight-bold ' style={{marginRight:'15px'}}>${(price-((discount/100)*price)).toFixed(2)}</text>
                             <text className='font-color-grey pb-4' style={{textDecorationLine:'line-through'}}> ${price} </text>
                         </p>
                     ): <p>
                         <text className='font-weight-bold pb-4'>${price}</text> 
                     </p> 
                 }
                 <input className='btn-grey' type="button" value="Buy Now" disabled />
                 </>
             )
           
         }
     }
     
     return (
         <div className='container'>
                 <div className="row " style={{}} >
                        <div className="col-md-3 order-md-1  " style={{marginRight: '0px'}}>
                            <div className="text-center">
                                <img src={image} alt="" style={{ width:"150px", height:"250px"}}/>
                            </div>
                        
                         </div>
                         <div className="col-md-7 order-md-2 ml-auto pb-4  " style={{marginBottom: '40px'}}>
                             {renderItem()}
                         </div>
             </div>  
           
         </div>
     )
 }

// class BookCard extends React.Component{

//      renderItem =()=>{
//                  if (this.props.stock){
//                      return (
        
//                          <>
        
//                          <p className='font-color-grey'>{this.props.author}</p>
//                          <h4 className='font-weight-bold pb-0'>{this.props.title}</h4>
//                          <p style={{fontSize:'12px'}}><span >&#11088;</span>  {this.props.review}/5 Review</p>
//                          <p style={{fontSize:'14px'}}>{this.props.desc}</p>
//                          {
//                              this.props.discount >0 ?(
//                                  <p>
//                                      <text className='font-weight-bold ' style={{marginRight:'15px'}}>${(this.props.price-((this.props.discount/100)* this.props.price)).toFixed(2)}</text>
//                                      <text className='font-color-grey pb-4' style={{textDecorationLine:'line-through'}}> ${this.props.price} </text>
//                                  </p>
//                              ): <p>
//                                  <text className='font-weight-bold pb-4'>${this.props.price}</text> 
//                              </p> 
//                          }
//                          <input className='btn-blue' type="button" value="Buy Now" />
//                          </>
//                      )
                   
//                  } else {
//                      return(
//                          <>
//                          <p className='font-color-grey'>{this.props.author}</p>
//                          <h4 className='font-weight-bold'>{this.props.title}</h4>
//                          <p style={{fontSize: '12px'}}><span>&#11088;</span>  {this.props.review}/5 Review</p>
//                          <input className='habis' style={{fontSize:'10px'}} type="button" value="Sold Out" disabled/>
//                          <p style={{fontSize:'14px'}}>{this.props.esc}</p>
//                          {
//                              this.props.discount >0 ?(
//                                  <p>
//                                      <text className='font-weight-bold ' style={{marginRight:'15px'}}>${(this.props.price-((this.props.discount/100)*this.props.price)).toFixed(2)}</text>
//                                      <text className='font-color-grey pb-4' style={{textDecorationLine:'line-through'}}> ${this.props.price} </text>
//                                  </p>
//                              ): <p>
//                                  <text className='font-weight-bold pb-4'>${this.props.price}</text> 
//                              </p> 
//                          }
//                          <input className='btn-grey' type="button" value="Buy Now" disabled />
//                          </>
//                     )
                   
//                 }
//              }
    
//     render(){
      
//                     <div className="row " >
                           
//                           <div className="col-3">
//                                <img src={this.props.image} alt="" style={{ width:"250px", height:"350px"}}/>
//                            </div>
//                            <div className="col-6 pb-4  book-card ">
//                                {this.props.renderItem()}
//                            </div>
//                     </div>  
                   
           
//     }
// }
export default BookCard