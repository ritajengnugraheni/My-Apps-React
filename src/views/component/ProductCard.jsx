import React from "react"


const ProductCard = (props)=> {
    const {namaData}=props 
    const {nama, harga, desc, discount,stok}= namaData

    const renderItem =()=>{
        if (stok){
            return (
                <>
                <h3>Nama : {nama}</h3>
                <h4>Price : {harga}</h4>
                {
                     discount > 0 & stok>0 ?(
                        <h5>Discount : {discount} Maka harga menjadi {harga - (discount/100 * harga)} </h5>
                        ): null
                }
                
                <p>Desc : {desc}</p>
                <p>Stok : {stok}</p>
               
                </>
                )
            
            
        } else {
            return (
                <p>Stok kosong!!</p>
            
            )
        }            
    }
    return (
        <div style={{width: '240px', padding : '16px', border: '1px solid black', borderRadius:'8px', marginLeft: '10px', marginTop: '5px'}}>
            {renderItem()}
        </div>
    )
}
export default ProductCard