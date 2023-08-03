import React from "react";
import ItemDetails from "../item-details";
import Record from "../record";
import { SwapiServiceConsumer } from "../swapi-service-context";


const PlanetDetails = ({selectedItemId}) => {
    return(
        <SwapiServiceConsumer>
            {
                ({ getPlanet, getPlanetImage }) => (
                    <ItemDetails selectedItemId = {selectedItemId}
                    getData = {getPlanet}
                    getItemUrl = {getPlanetImage}>
                        <Record field = "population" label = "Population" />
                        <Record field = "rotationPeriod" label = "Rotation period" />
                        <Record field = "diameter" label = "Diameter" />
                    </ItemDetails>
                )
            }
        </SwapiServiceConsumer>
    );
    
}


export default PlanetDetails;