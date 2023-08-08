import React, { useState } from "react";
import "./people-page.css";
import Row from "../row";

const Page = ( ItemDetails, ItemList ) => {

    
    const [selectedItem, setSelectedItem] = useState({
        selectedItemId: null,
    });

    const {selectedItemId} = selectedItem;

    const listItem = (
        <ItemList onItemSelected = {onItemSelected} />
    );

    const details = (
        <ItemDetails selectedItemId = {selectedItemId}/>
    );

    function onItemSelected (id) {
        setSelectedItem({
            selectedItemId: id,
        });
        console.log(id);
    };
    
    return(
        <Row leftItem = { listItem } rightItem = {details} />
    );
};

export default Page;