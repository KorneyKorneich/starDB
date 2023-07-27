import React from "react";
import "./error-message.css"

const ErrorMessage = () => {
    return(
        <div className="error-block">
            <img src="" alt="" />
            <div className="error-message">
                <h3>Boom!</h3>
                <span>Something went wrong</span>
                <span>(but we trying to fix that)</span>
            </div>
        </div>
    )};

export default ErrorMessage;