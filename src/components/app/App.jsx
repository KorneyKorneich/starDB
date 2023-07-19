import React from "react";
import Header from "../header";
import RandomItem from "../random-item";
import List from "../list";
import PlanetDetails from "../planet-details";
import PersonDetails from "../person-details";
import StarshipDetails from "../starship-details";
import Footer from "../footer";
import SwapiService from "../../services/swapi-service/swapi";


const App = () =>{
    return(
        <div className="app">
            <Header />
            <RandomItem />
            <List />
            <Footer />
        </div>
    );
};

export default App;