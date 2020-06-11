import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import Header from './components/header/header'
import Gallery from './components/gallery/gallery'
import Footer from './components/footer/footer'
import {API_KEY, API_URL} from './Constants'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
`

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
      <Container>
        <Header />
        <Gallery pic={picObject.url} date={picObject.date}/>
        <Footer />
      </Container>
  );
}

export default App;
