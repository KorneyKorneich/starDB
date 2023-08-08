import React from "react";
import ItemDetails from "../item-details";
import Record from "../record";
import withSwapi from "../hoc-helper/with-swapi-service";

const PlanetDetails = ( props ) => {
    return(
        <ItemDetails {...props}>
            <Record field = "diameter" label = "Diameter" />
            <Record field = "rotationPeriod" label = "Rotation Period" />
            <Record field = "population" label = "Population" />
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapi) => {
    return{
        getData: swapi.getPlanet,
        getItemUrl: swapi.getPlanetImage
    };
};

export default withSwapi(mapMethodsToProps)(PlanetDetails);