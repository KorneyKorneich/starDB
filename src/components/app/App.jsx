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

const swapi = new SwapiService();


const App = () =>{
    const [itemList, setItemList] = useState([]);

    useEffect(()=> {
        swapi.getAllPeople().then((res) => {
            const names = res.map((item) => item.name);
            setItemList(names);
        });
    }, []);
    return(
        <div className="app">
            <Header />
            <RandomItem />
            <List itemList={itemList}/>
            <PersonDetails />
            <Footer />
        </div>
    );
};

export default App;