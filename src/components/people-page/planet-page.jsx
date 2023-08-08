import PlanetDetails  from "../sw-components/planet-details";
import { PlanetsList } from "../sw-components/item-lists";
import Page from "./page";

const PlanetPage = () => {
    return Page(PlanetDetails, PlanetsList)
};

export default PlanetPage;