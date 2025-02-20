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
import Terms_Conditions from './components/Terms_Conditions';
import Privacy_Policy from './components/Privacy_Policy';
import Disclaimer from './components/Disclaimer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={
            <>
              <Home />
              <Story />
              <Photos />
              <Video />
              <Hiscoin />
              <WhyBroc />
              <WhatsNext />
            </>
            } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-conditions" element={<Terms_Conditions />} />
          <Route path="/privacy-policy" element={<Privacy_Policy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
