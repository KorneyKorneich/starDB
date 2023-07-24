import React from "react";

const List = ({itemList}) => {

    const items = itemList.map((item)=> {
        return(
             <div className="list-item" >{item.personName}</div>
        );
    });

    return(
        <ul className="item-list">
            {items}
        </ul>
    );
};

export default List;