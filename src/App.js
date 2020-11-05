import React from 'react';
import './App.css';
import SideBar from './SideBar'
import Feed from './Feed'
import Widget from "./Widget/index"

function App() {
  return (
    <div className="app">
     <SideBar/>
     <Feed/>
     <Widget/>
    </div>
  );
}

export default App;
