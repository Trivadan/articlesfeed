import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import JSONDATA from './Data.json';
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState ('')

  return (
    <div className='App'>
      <input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>

      <ul>
      {
        JSONDATA.filter((val)=> {
          if (searchTerm == ""){
            return val
          }else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          }
        }).map ((val, key)=> {
          return(
              <li className="user" key={key}> 
              <div className="bannerimg"><img src={val.urlToImage}/></div>
              <h2>{val.title}</h2>
              <h4>{val.author}</h4>
              <p>{val.description}</p>
              <a href={val.url} className="btn" target="_blank">Learn more</a>
              </li>
          );
        })}
        </ul>

    </div>
  );
};

export default App;