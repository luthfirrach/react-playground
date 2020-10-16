import React from "react";

// Component
import NavBar from "./component/navbar.component";
import RecentItem from "./component/recentItem.component";
import TrendingCases from "./component/trendingCases.component";
// import logo from './logo.svg';

// Style
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <div className='container'>
        <RecentItem />
        <TrendingCases />
      </div>
    </div>
  );
}

export default App;
