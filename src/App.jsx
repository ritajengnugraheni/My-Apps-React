import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewScreen from './views/screen/NewScreen';
import TableProduct from './views/component/TableProduct';
import Table from './views/component/TableBaru';
import CounterScreen from './views/screen/Counter';
import ProductCard from './views/component/ProductCard';
import { render } from '@testing-library/react';




function App() {
  // render array 
  // let arr = ['Bandung', 'Jakarta', 'Tangerang'];
let arrProduct =[
  {
    nama : ' Sepatu Basket ',
    harga : 200000,
    desc: 'baru aja sih ',
    discount : 20,
    stok : 0
  },
  {
    nama : ' kaos',
    harga : 250000,
    desc: 'kaos baru',
    discount :30,
    stok:5
  },
  {
    nama : 'jeans',
    harga : 350000,
    desc: 'apa an tuh',
    discount: 0,
    stok:10
  }

]
// const hitungHarga =()=>{

// }
const renderProduct =()=>{
  return arrProduct.map((val)=> {
    return <>
    <ProductCard namaData={val}/>
    </>
  })
}
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

  return (
    <div className="App">
      
    <h1>Hallo world!</h1>
    {/* <ProductCard/> */}
    {renderProduct()}
     
    </div>
  );
  //========================
}
export default App;
