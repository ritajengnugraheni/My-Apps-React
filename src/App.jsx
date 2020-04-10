import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewScreen from './views/screen/NewScreen';
import TableProduct from './views/component/TableProduct';
import Table from './views/component/TableBaru';
import CounterScreen from './views/screen/Counter';
import ProductCard from './views/component/ProductCard';
import { render } from '@testing-library/react';
import BookCard from './views/component/BookCard';
import Handmaid from './img/handmaid.png'
import Crazy from './img/crazyRich.png';
import Brave from './img/brave.png';
import Educated from './img/educated.png';
import './bootstrap.css'



function App() {
  // render array 
  // let arr = ['Bandung', 'Jakarta', 'Tangerang'];

  // menggunakan objek 
  // let arrProduct =[
  //   {
  //     nama : ' Sepatu Basket ',
  //     harga : 200000,
  //     desc: 'baru aja sih ',
  //     discount : 20,
  //     stok : 0
  //   },
  //   {
  //     nama : ' kaos',
  //     harga : 250000,
  //     desc: 'kaos baru',
  //     discount :30,
  //     stok:5
  //   },
  //   {
  //     nama : 'jeans',
  //     harga : 350000,
  //     desc: 'apa an tuh',
  //     discount: 0,
  //     stok:10
  //   }

  // ]

  // Array Buku
  let arrBooks = [
    {
      author: "Margaret Atwood",
      title: "The Handmaid's Tale",
      review: 4,
      desc: `This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...`,
      price: 18.99,
      discount: 60,
      image: Handmaid,
      stock: 7,
    },
    {
      author: "Kevin Kwan",
      title: "Crazy Rich Asians",
      review: 5,
      desc: `The outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...`,
      price: 24.12,
      discount: 80,
      image: Crazy,
      stock: 0,
    },
    {
      author: "Aldous Huxley",
      title: "Brave New World",
      review: 3,
      desc: `Dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...`,
      price: 18.99,
      discount: 60,
      image: Brave,
      stock: 3,
    },
    {
      author: "Tara Westover",
      title: "Educated",
      review: 4.5,
      desc: `It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...`,
      price: 34.21,
      discount: 0,
      image: Educated,
      stock: 3,
    },
  ];

  // Render buku 

  const renderBuku = () => {
    return arrBooks.map((val) => {
      return <BookCard namaBuku={val} />

    })
  }

  // Render objek
  // const renderProduct =()=>{
  //   return arrProduct.map((val)=> {
  //     return <>
  //     <ProductCard namaData={val}/>
  //     </>
  //   })
  // }

  // Render Array 
  // const renderArr =()=>{
  //   return arr.map((val) =>{
  //     return (
  //     <>
  //     <CounterScreen kota={val}/>
  //       {/* <p>{kota} </p> */}
  //       {/* <NewScreen/> */}
  //     </>
  //     )})
  // }
  //=======================
  // fungsi tambah 
  // const tambah=()=>{
  //   return(
  //     2+2
  //   )
  // }
  //================

  // Main program 
  //==================
  // <h1>Hallo world!</h1>
  // {/* <ProductCard/> */}
  // {renderProduct()}
  //===================


  return (
    <div>
      <div className="App">
             <div class="container " >
                    <nav className="fixed-top navbar-expand-sm bg-light ">
                       <div className="col-12 col-md-12  d-xl-block">
                        <div className="row align-items-center navigasi">
                                <div className="col-md-12 mb-2 order-md-1 mb-lg-0">
                                   <h1 style={{ color: '#0a8fb4', marginTop:'20px'}} className='font-weight-bold'><span style={{fontSize: '30px'}}>&#128218;</span> Book Store <span style={{fontSize:'30px'}}>&#128218;</span></h1>
                                </div>                 
                        </div>
                       </div>    
                    </nav>
            </div>       
            
      </div>
      <div style={{marginLeft:'10px', marginTop:'120px'}}>
         {renderBuku()}
      </div>
    </div>

  );
  //========================
}
export default App;
