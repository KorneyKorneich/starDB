import React, {useState, useEffect} from "react";
import Header from "../header";
import RandomItem from "../random-item";
import List from "../list";
import PlanetDetails from "../planet-details";
import PersonDetails from "../person-details";
import StarshipDetails from "../starship-details";
import Footer from "../footer";
import Spinner from "../spinner/spinner";
import SwapiService from "../../services/swapi-service/swapi";
import "./App.css";

const swapi = new SwapiService();


const App = () =>{
    const [selectedPerson, setSelectedPerson] = useState({
        selectedPersonId: null,
    });
    const {selectedPersonId} = selectedPerson;
    function onItemSelected (id) {
        setSelectedPerson({
            selectedPersonId: id,
        });
        console.log(id);
    };
  
    

    return(
        <div className="app">
            <Header />
            <RandomItem />
            <List onItemSelected = {onItemSelected} />
            <PersonDetails selectedPersonId = {selectedPersonId}/>
            <Footer />
        </div>
    );
};

export default App;