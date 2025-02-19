import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/Home';
import Story from './components/Story';
import Photos from './components/Photos';
import Video from './components/Video';
import Hiscoin from './components/hiscoin';
import WhatsNext from './components/WhatsNext';
import WhyBroc from './components/WhyBroc';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/video" element={<Video />} />
          <Route path="/his-coin" element={<Hiscoin />} />
          <Route path="/whats-next" element={<WhatsNext />} />
          <Route path="/why-broc" element={<WhyBroc />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
