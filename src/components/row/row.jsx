import React from "react";
import "./row.css";

const Row = ({ leftItem, rightItem }) => {
    return(
        <div className="page">
            {leftItem}
            {rightItem}
        </div>
    );
};

export default Row;