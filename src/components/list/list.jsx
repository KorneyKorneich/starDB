import React, {useState, useEffect} from "react";
import SwapiService from "../../services/swapi-service/swapi";
import Spinner from "../spinner";
import "./list.css";

const List = ({onItemSelected}) => {
    const swapi = new SwapiService();

    const [itemList, setItemList] = useState({
        peopleList: null,
        listLoaded: false,
    });
    const { peopleList, listLoaded } = itemList;
    useEffect(() =>{
        swapi.getAllPeople()
        .then((peopleList)=> {
            setItemList({
                peopleList,
                listLoaded:true,
            });
        });
    }, [listLoaded]);
    
    const renderItems = (peopleList) => {
        if(!peopleList) return <Spinner />;
        return peopleList.map(({id, name})=> {
            return(
                <div className="list-item"
                key={id}
                onClick = {() => onItemSelected(id)}>
                    {name}
                </div>
            );
        });
    };
    
    return(
        <ul className="items-list">
            {renderItems(peopleList)}
        </ul>
    );
};

export default List;