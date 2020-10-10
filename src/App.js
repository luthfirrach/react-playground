import React from "react";

// Component
import Navibar from "./component/navbar.component";
import RecentItem from "./component/recentItem.component";
// import logo from './logo.svg';

// Style
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    // {/* <img src={logo} className="App-logo" alt="logo" />
    // <p>
    //   Edit <code>src/App.js</code> and save to reload.
    // </p>
    // <a
    //   className="App-link"
    //   href="https://reactjs.org"
    //   target="_blank"
    //   rel="noopener noreferrer"
    // >
    //   Learn React
    // </a> */}
    //   </header>
    // </div>
    <div className='App'>
      <Navibar />
      <RecentItem />
    </div>
  );
}

export default App;
