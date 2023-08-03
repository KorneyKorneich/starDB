import React from "react";
import ItemDetails from "../item-details";
import Record from "../record";
import { SwapiServiceConsumer } from "../swapi-service-context";

const StarshipDetails = ({selectedItemId}) => {
    return(
        <SwapiServiceConsumer>
            {
                ({getStarship, getStarshipImage}) => (
                    <ItemDetails selectedItemId = {selectedItemId}
                    getData = {getStarship}
                    getItemUrl = {getStarshipImage}>
                        <Record field = "model" label = "Model" />
                        <Record field = "length" label = "Length" />
                        <Record field = "costInCredits" label = "Cost" />
                    </ItemDetails>
                )
            }
        </SwapiServiceConsumer>
    ); 
}

export default StarshipDetails;