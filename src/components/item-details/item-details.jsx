import React, { useState, useEffect } from "react";
import "./item-details.css";

const ItemDetails = ({ selectedItemId, getData, getItemUrl, children }) => {
    const [itemInfo, setItemInfo] = useState({
        item: null,
        image: null,
    });

    const id = selectedItemId;

    const { item, image } = itemInfo;
    

    
    const updateItem = () => {
        
        if(!id) {
            return;
        };
        getData(id)
        .then((res) => {setItemInfo({
            item: res,
            image: getItemUrl(id),
        });
        console.log(res)
        });
    };

    useEffect(() => {
            updateItem(id);
        }, [selectedItemId]);

        if(!item){
            return;
        }

        const { name } = item;
        console.log(id);
    return(
        <div className="item-details">
            <img  src={ image } alt="Item_photo" className="item-img"/>
            <div className="item-info">
                <h3>{id}. {name}</h3>
                {
                    React.Children.map(children, (child) => {
                        return React.cloneElement(child, {item});
                    })
                }
            </div>
        </div>

    );
};

export default ItemDetails;