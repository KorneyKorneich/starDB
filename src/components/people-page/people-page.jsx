import React, { useState } from "react";
import PersonDetails  from "../sw-components/person-details";
import "./people-page.css";
import Row from "../row";
import { PersonList } from "../sw-components/item-lists";

const PeoplePage = () => {

    
    const [selectedPerson, setSelectedPerson] = useState({
        selectedPersonId: null,
    });

    const {selectedPersonId} = selectedPerson;

    const listItem = (
        <PersonList onItemSelected = {onItemSelected}>
            
        
        </PersonList>
    );

    const personDetails = (
        <PersonDetails selectedItemId = {selectedPersonId}/>
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