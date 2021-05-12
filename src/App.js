import React from "react";
import "./App.css";
import LeftContainer from "./LeftContainer";
import Search from "./Search";
import Data from "./Data";
import Card from "./Card";

function App() {
  return (
      <div className="app">
        <div className="left">
          <h2 className="left__tile">Course Categories</h2>  
          <LeftContainer />
        </div>
        <div className="right">
          <Search details={Data} />
          
        </div>
      </div>
  );
}

export default App;
