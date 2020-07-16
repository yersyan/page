import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Header} from "./components/header/header";
import {SearchBlock} from "./components/searchblock/searchBlock";
import {Footer} from "./components/footer/footer";
import {MainPage} from "./components/mainPage/mainPage";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
          <Header/>
          <SearchBlock/>
          <MainPage/>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
