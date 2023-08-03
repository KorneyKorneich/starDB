import React from "react";
import {withData, compose, withSwapi} from "../hoc-helper";
import List from "../list";

const ListWithChild = (fn) => (Wrapped) => {
    return (props) => {
        return(
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        );
    };
};

const mapPersonMethodsToProps = ( swapi ) => {
    return{
        getData: swapi.getAllPeople,
    };
};

const mapPlanetMethodsToProps = ( swapi ) => {
    return{
        getData: swapi.getAllPlanets,
    };
};

const mapStarshipMethodsToProps = ( swapi ) => {
    return{
        getData: swapi.getAllStarhips,
    };
};

const renderName = (item) => `${item.name}`;

// const PersonList = withSwapi(mapPersonMethodsToProps)(
//                         withData(
//                             ListWithChild(renderName)(
//                                 List)));
const PersonList = compose(
    withSwapi(mapPersonMethodsToProps),
    withData,
    ListWithChild(renderName)
)(List);

const PlanetsList = compose(
    withSwapi(mapPlanetMethodsToProps),
    withData,
    ListWithChild(renderName),
)(List);

const StarshipsList = compose(
    withSwapi(mapStarshipMethodsToProps),
    withData,
    ListWithChild(renderName),
)(List);

export {
    PersonList,
    PlanetsList,
    StarshipsList,
};