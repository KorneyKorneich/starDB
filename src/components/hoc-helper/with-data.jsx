import React, {useState, useEffect} from "react";
import Spinner from "../spinner";

const withData = (View, getData) => {
    return (props) => {
        const [itemData, setData] = useState({
            data: null,
            listLoaded: false,
        });

        const { data, listLoaded } = itemData;

        useEffect(() =>{
            getData()
            .then((data)=> {
                setData({
                    data,
                    listLoaded:true,
                });
            });
        }, [listLoaded]);
        if(!data) return <Spinner />;
        return(
            <View {...props} data = {data} />
        );
    };
};

export default withData;