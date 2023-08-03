import React from "react";
import "./list.css";


const List = (props) => {
    const { data } = props;
    const { onItemSelected, children } = props;
    const renderItems = (data) => {

        return data.map((item)=> {
            const { id } = item;
            const label = children(item);

            return(
                <div className="list-item"
                key={id}
                onClick = {() => onItemSelected(id)}>
                    {id}. {label}
                </div>
            );
        });
    };
    
    return(
        <ul className="items-list">
            {renderItems(data)}
        </ul>
    );
};


export default List;