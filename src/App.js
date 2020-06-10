import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import Header from './components/header/header'
import Gallery from './components/gallery/gallery'
import Footer from './components/footer/footer'
import {API_KEY, API_URL} from './Constants'



function App() {

 const [picObject, setPicObject] = useState({})
  useEffect(()=>{
    axios.get(`${API_URL}?api_key=${API_KEY}`)
    .then(response =>{
      setPicObject(response.data)
    })
    .catch(error =>{
      console.log(error)
    })
  }, [])
  return (
      <div className='container'>
        <Header />
        <Gallery pic={picObject.url}/>
        <Footer />
      </div>
  );
}

export default App;
