import React from "react";
import ItemDetails from "../item-details";
import Record from "../record";
import withSwapi from "../hoc-helper/with-swapi-service";

const StarshipDetails = ( props ) => {
    return(
        <ItemDetails {...props}>
            <Record field = "model" label = "Model" />
            <Record field = "crew" label = "Crew" />
            <Record field = "name" label = "Name" />
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapi) => {
    return{
        getData: swapi.getStarship,
        getItemUrl: swapi.getStarshipImage,
    };
};

export default withSwapi(mapMethodsToProps)(StarshipDetails);