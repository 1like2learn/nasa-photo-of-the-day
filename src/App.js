import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import Header from './components/header/header'
import Gallery from './components/gallery/gallery'
import Footer from './components/footer/footer'
import {API_KEY, API_URL} from './Constants'
import styled from 'styled-components'

const Container = styled.div`
  /* position: relative; */
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  console.log(picObject.title)
  return (
        <Container>
          <Header />
          <Gallery pic={picObject.url} date={picObject.date} title= {picObject.title} explain={picObject.explanation}/>
          <Footer />
        </Container>   
  );
}

export default App;
