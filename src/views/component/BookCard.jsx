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
                <h4 className='font-weight-bold pb-0'>{title}</h4>
                <p><span style={{fontSize:'16px'}}>&#11088;</span>  {review}/5 Review</p>
                <p>{desc}</p>
                {
                    discount >0 ?(
                        <p>
                            <text className='font-weight-bold ' style={{marginRight:'15px'}}>${price-((discount/100)*price)}</text>
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
                <h4 className='font-weight-bold'>{title}</h4>
                <p><span style={{fontSize:'16px'}}>&#11088;</span>  {review}/5 Review</p>
                <input className='habis' style={{fontSize:'10px'}} type="button" value="Sold Out" disabled/>
                <p>{desc}</p>
                <h5 className='font-weight-bold'>${price}</h5>
                <input className='btn-grey' type="button" value="Buy Now" disabled />
                </>
            )
           
        }
    }
     
    return (
        <div className='container'>
                <div className="row " >
                   
                       <div className="col-3">
                            <img src={image} alt="" style={{ width:"250px", height:"300px"}}/>
                        </div>
                        <div className="col-5 pb-4  book-card ">
                            {renderItem()}
                        </div>
               
                      
                   
                   
            </div>  
           
        </div>
    )
}
export default BookCard