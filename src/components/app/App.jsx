import React from "react";
import Header from "../header";
import RandomItem from "../random-item";
import Footer from "../footer";
import PeoplePage from "../people-page";
import { SwapiServiceProvider } from "../swapi-service-context";
import SwapiService from "../../services/swapi-service/swapi";
import "./App.css";

const swapi = new SwapiService();


const App = () =>{
    return(
        <div className="app">
            <SwapiServiceProvider value={swapi}>
                <Header />
                <RandomItem />
                <PeoplePage />
                <Footer />
            </SwapiServiceProvider>
        </div>
    );
};

export default App;