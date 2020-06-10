import React from "react";
import "./App.css";
import Header from './components/header/header'
import Gallery from './components/gallery/gallery'
import Footer from './components/footer/footer'

function App() {
  return (
      <div className='container'>
        <Header />
        <Gallery />
        <Footer />
      </div>
  );
}

export default App;
