import React, { useState, useEffect } from "react";
import SwapiService from "../../services/swapi-service/swapi";
import "./person-details.css";

const PersonDetails = ({ selectedPersonId }) => {
    const [personInfo, setPersonInfo] = useState({
        person: null,
    });

    const id = selectedPersonId;
    const swapi = new SwapiService();
    const { person } = personInfo;
    

    
    const updatePerson = () => {
        
        if(!id) {
            return;
        };
        swapi.getPerson(id)
        .then((res) => {setPersonInfo({person: res,})
        console.log(person);
    console.log(res)});
    };

    useEffect(() => {
            updatePerson(id);
            
        }, [selectedPersonId]);

        if(!person){
            return;
        }

        const { name, gender, birthYear, eyeColor} = person;
        
    return(
        <div className="person-details">
            <img src="" alt=""/>
            <div className="person-info">
                <h3>{name}</h3>
                <div className="gender">
                    <span>{gender}</span>
                </div>
                <div className="birth-year">
                    <span>{birthYear}</span>
                </div>
                <div className="eye-color">
                    <span>{eyeColor}</span>
                </div>
            </div>
        </div>

    );
};







export default PersonDetails;