import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../header";
import RandomItem from "../random-item";
import Footer from "../footer";
import PeoplePage from "../people-page";
import SwapiContext from "../swapi-service-context";
import SwapiService from "../../services/swapi-service/swapi";
import PlanetPage from "../people-page/planet-page";
import StarshipPage from "../people-page/starship-page";
import { LoginPage } from "../hoc-helper/login-page";
import { RequireAuth } from "../hoc-helper/require-auth";
import "./App.css";
import { AuthProvider } from "../hoc-helper/Auth-provider";
import ErrorMessage from "../error-message/error-message";

const swapi = new SwapiService();


const App = () =>{
    return(
        <div className="app">
            <SwapiContext.Provider value={swapi}>
                <AuthProvider>
                    <Header />
                    <RandomItem />
                    <Routes>
                        <Route path="/" element = {<h2>Welcome to StarDB</h2>} /> 
                    
                            <Route path="/people" element={
                                <RequireAuth>
                                    <PeoplePage />
                                </RequireAuth>} 
                            />
                            <Route path="/planets" element={
                                <RequireAuth>
                                    <PlanetPage />
                                </RequireAuth>} 
                            />
                            <Route path="/starships" element={
                                <RequireAuth>
                                    <StarshipPage />
                                </RequireAuth>} 
                            />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="*" element={<ErrorMessage />} />
                    </Routes>
                    <Footer />
                </AuthProvider>
            </SwapiContext.Provider>
        </div>
    );
};

export default App;