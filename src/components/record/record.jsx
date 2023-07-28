import React from "react";

const Record = ({ item, field, label }) => {
    return(
        <div className="info field">
            <span>{label}: {item[field]}</span>
        </div>
    );
};

export default Record;