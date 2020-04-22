import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom"

import Cookie from "universal-cookie"

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
import Sprint from './img/sprint.png';
import Hacking from './img/hacking.png';
import './bootstrap.css'
import Inputscreen from './views/screen/InputScreen';

import AuthScreen from './views/screen/AuthScreen';
import LifecycleScreen from './views/screen/LifecycleScreen';
import HomeScreen from './views/screen/HomeScreen';
import PageNotFound from './views/screen/PageNotFound';
import Navbar from './views/component/Navbar';
import ProfileScreen from './views/screen/ProfileScreen';
import RegisScreen from './views/screen/RegisScreen';
import LoginScreen from './views/screen/LoginScreen';
import TodoReduxScreen from './views/screen/TodoReduxScreen';
import Cookies from 'universal-cookie';


const cookieObject = new Cookie()

class App extends React.Component {
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
  // let arrBooks = [
  //   {
  //     author: "Margaret Atwood",
  //     title: "The Handmaid's Tale",
  //     review: 4,
  //     desc: `This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...`,
  //     price: 18.99,
  //     discount: 60,
  //     image: Handmaid,
  //     stock: 7,
  //   },
  //   {
  //     author: "Kevin Kwan",
  //     title: "Crazy Rich Asians",
  //     review: 5,
  //     desc: `The outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...`,
  //     price: 24.12,
  //     discount: 80,
  //     image: Crazy,
  //     stock: 0,
  //   },
  //   {
  //     author: "Aldous Huxley",
  //     title: "Brave New World",
  //     review: 3,
  //     desc: `Dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...`,
  //     price: 18.99,
  //     discount: 60,
  //     image: Brave,
  //     stock: 3,
  //   },
  //   {
  //     author: "Tara Westover",
  //     title: "Educated",
  //     review: 4.5,
  //     desc: `It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...`,
  //     price: 34.21,
  //     discount: 0,
  //     image: Educated,
  //     stock: 3,
  //   },
  //   {
  //     author: "Tara Westover",
  //     title: "Hacking Growth",
  //     review: 4.5,
  //     desc: `The definitive playbook by the pioneers of Growth Hacking, one of the hottest business methodologies...`,
  //     price: 20.21,
  //     discount: 0,
  //     image: Hacking,
  //     stock: 3,
  //   },
  //   {
  //     author: "Jake Knapp",
  //     title: "Sprint",
  //     review: 4.5,
  //     desc: ` “Read this book and do what it says if you want to build better products faster.”
  //     EV WILLIAMS, founder of Medium & Twitter.`,
  //     price: 14.99,
  //     discount: 50,
  //     image: Sprint,
  //     stock: 0,
  //   },
  // ];

  // // Render buku 

  // const renderBuku = () => {
  //   return arrBooks.map((val) => {
  //     return    <div className='col-md-4'><BookCard namaBuku={val} /></div>

  //   })
  // }

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
render() {
  return (
    // <div>
    //   <div className="App">
    //          <div class="container " >
    //                 <nav className="fixed-top navbar-expand-sm bg-light ">
    //                    <div className="col-12 col-md-12  d-xl-block">
    //                     <div className="row align-items-center navigasi">
    //                             <div className="col-md-12 mb-2 order-md-1 mb-lg-0">
    //                                <h1 style={{ color: '#0a8fb4', marginTop:'20px'}} className='font-weight-bold'><span style={{fontSize: '30px'}}>&#128218;</span> Book Store <span style={{fontSize:'30px'}}>&#128218;</span></h1>
    //                             </div>                 
    //                     </div>
    //                    </div>    
    //                 </nav>
    //         </div>       

    //   </div>
    //   <div style={{marginLeft:'10px', marginTop:'120px'}}>
    //      <div className="row"> {renderBuku()}
    //        </div>
    //   </div>
    // </div>

    // Counter screen 
    // <div className="App">
    //   <CounterScreen/>
    // </div>

    // input screen 
    // <div className="App">
    //   <Inputscreen/>
    // </div>


    // // <div className="App">
    //   {/* <h1 className='font-weight-bold' style={{color: 'grey'}}>Halloo World</h1> */}
    //   {/* <LoginScreen/> */}
    //   {/* <AuthScreen/> */}
    //   {/* <LifecycleScreen/> */}

    // // </div>

    <>
      {/* <LifecycleScreen/> */}
      {/* <HomeScreen/> */}
      <Navbar />
      <Switch>
        {/* <Route exact path="/" component={HomeScreen}/>
        <Route exact path="/auth" component={AuthScreen}/>
        <Route exact path="/input" component={Inputscreen}/>
        <Route exact path="/counter" component={CounterScreen}/>
        <Route exact path="/profil/:username" component={ProfileScreen}/> */}
        <Route exact path="/regis" component={RegisScreen} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/home/:username" component={HomeScreen} />
        <Route exact path="/input" component={Inputscreen}/>
        <Route exact path="/todo" component={TodoReduxScreen}/>
        <Route exact path="/*" component={PageNotFound} />
        

      </Switch>
    </>

  );
}

  
  //========================
}




export default withRouter(App);
