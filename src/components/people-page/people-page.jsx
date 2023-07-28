import React, { useState } from "react";
import List from "../list";
import PersonDetails from "../item-details";
import "./people-page.css";
import SwapiService from "../../services/swapi-service/swapi";
import Row from "../row";
import Record from "../record";

const PeoplePage = () => {
    const swapi = new SwapiService();
    
    const [selectedPerson, setSelectedPerson] = useState({
        selectedPersonId: null,
    });

    const {selectedPersonId} = selectedPerson;

    const listItem = (
        <List onItemSelected = {onItemSelected}
        getData = {swapi.getAllPeople}>
            {
                (item) => `${item.name} (${item.birthYear})`
            }
        </List>
    );

    const personDetails = (
    <PersonDetails selectedItemId = {selectedPersonId}
    getData = {swapi.getPerson}
    getItemUrl = {swapi.getPersonImage}>
        <Record field = "gender" label = "Gender" />
        <Record field = "birthYear" label = "Birth Year" />
        <Record field = "eyeColor" label = "Eye Color" />

    </PersonDetails>
    );

    function onItemSelected (id) {
        setSelectedPerson({
            selectedPersonId: id,
        });
        console.log(id);
    };
    
    return(
        <Row leftItem = { listItem } rightItem = {personDetails} />
    );
};

export default PeoplePage;