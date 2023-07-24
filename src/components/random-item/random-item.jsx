import React, {useEffect, useState} from "react";
import "./random-item.css";
import SwapiService from "../../services/swapi-service/swapi";
import Spinner from "../spinner/spinner";

const swapi = new SwapiService();

const RandomItem = () => {
    const [planetInfo, setPlanetInfo] = useState({
        planet: null,
        loading: true,
    });


    const onPlanetLoaded = (planet) => {
        return setPlanetInfo({
            planet,
            loading: false
        });
    };

    const updatePlanet = () =>{
        
        const randomPlanetId = Math.floor(Math.random() * 12) + 1;
        swapi.getPlanet(1)
        .then((planet) => {
            onPlanetLoaded(planet);
        });
    };
    useEffect(() => {
        updatePlanet();
    }, []);

    // useEffect(() => {
    //     const intervalId = setInterval(()=> {
    //     updatePlanet();

    // }, 3000);
    // return () => {
    //     clearInterval(intervalId);
    //   };
    // }, []);
    const {planet, loading} = planetInfo;


    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PlanetView planet = {planet}/> : null;
    return(
        <div className="random-item">
            {spinner}
            {content}
        </div>
    );
};


const PlanetView = ({ planet }) => {
const { planetName, population, rotationPeriod, diameter } = planet;
return(
    <React.Fragment>
        <img src="#" alt="1111" className="item-img" />
        <div className="about">
            <h3 className="planet-name">{planetName}</h3>
            <div className="population">
                <span>Population: {population}</span>
            </div>
            <div className="rotation-period">
                <span>Rotation period: {rotationPeriod}</span>
            </div>
            <div className="diameter">
                <span>Diameter: {diameter}</span>
            </div>
        </div>
    </React.Fragment>
)};
export default RandomItem;