import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewScreen from './views/screen/NewScreen';
import TableProduct from './views/component/TableProduct';
import Table from './views/component/TableBaru';




function App() {
  // render array 
  let arr = ['Bandung', 'Jakarta', 'Tangerang'];
  const renderArr =()=>{
    return arr.map((kota) =>{
      return (
      <>
        <p>{kota} </p>
        <NewScreen/>
      </>
      )})
  }
  //=======================
  // Main program 

  return (
    <div className="App">
      
      <h1 className="test-class" style={{color: 'red'}}> Data Karyawan </h1>
      <p style={{}}>PT. Bank CIMB Niaga, Tbk</p> 
      {/* {
      renderArr()
      } */}
      <center style={{marginTop: '50px'}}>
           {/* <TableProduct/> */}
           <Table/>
      </center>
     
    </div>
  );
  //========================
}
export default App;
