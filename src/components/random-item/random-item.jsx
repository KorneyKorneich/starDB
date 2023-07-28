import React, {useEffect, useState} from "react";
import "./random-item.css";
import SwapiService from "../../services/swapi-service/swapi";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../error-message/error-message";

const swapi = new SwapiService();

const RandomItem = () => {
    const [planetInfo, setPlanetInfo] = useState({
        planet: null,
        loading: true,
        error: false,
    });
    
    const onPlanetLoaded = (planet) => {
        return setPlanetInfo({
            planet,
            loading: false
        });
    };

    const onError = (err) => {
        return setPlanetInfo({
            error: true,
            loading: false,
        });
    };

    const updatePlanet = () =>{
        const randomPlanetId = Math.floor(Math.random() * 12) + 1;
        swapi.getPlanet(randomPlanetId)
        .then(onPlanetLoaded)
        .catch(onError);
    };
    useEffect(() => {
        updatePlanet();
        const intervalId = setInterval(
        updatePlanet, 5000);
    return () => {
        clearInterval(intervalId);
      };
    }, []);

    const {planet, loading, error} = planetInfo;

    const hasContent = !(error || loading);
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasContent ? <PlanetView planet = {planet}/> : null;

    return(
        <div className="random-item">
            {errorMessage}
            {spinner}
            {content}

        </div>
    );
};

const PlanetView = ({ planet }) => {
const { id, name, population, rotationPeriod, diameter } = planet;
return(
    <React.Fragment>
        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="1111" className="random-planet-img" />
        <div className="about">
            <h3 className="planet-name">{name}</h3>
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