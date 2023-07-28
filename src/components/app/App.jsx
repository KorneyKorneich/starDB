import React from "react";
import Header from "../header";
import RandomItem from "../random-item";
import Footer from "../footer";
import PeoplePage from "../people-page";
import "./App.css";

const App = () =>{
    return(
        <div className="app">
            <Header />
            <RandomItem />
            <PeoplePage />
            <Footer />
        </div>
    );
};

export default App;