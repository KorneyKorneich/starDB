import React from "react";
import ItemDetails from "../item-details";
import Record from "../record";
import withSwapi from "../hoc-helper/with-swapi-service";

const PersonDetails = ( props ) => {
    return(
        <ItemDetails {...props}>
            <Record field = "gender" label = "Gender" />
            <Record field = "birthYear" label = "Birth Year" />
            <Record field = "eyeColor" label = "Eye Color" />
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapi) => {
    return{
        getData: swapi.getPerson,
        getItemUrl: swapi.getPersonImage
    };
};

export default withSwapi(mapMethodsToProps)(PersonDetails);