import React, { useContext } from "react";
import SwapiContext from "../swapi-service-context";

const withSwapi = (mapMethodsToProps) => (Wrapped) => {
    return(props) => {
        const value = useContext(SwapiContext)
        const serviceProps = mapMethodsToProps(value);
        return <Wrapped {...props} {...serviceProps}/>
    }
};

export default withSwapi;