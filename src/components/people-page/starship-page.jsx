import Page from "./page";
import StarshipDetails from "../sw-components/starship-details";
import { StarshipsList } from "../sw-components/item-lists";

const StarshipPage = () => {
    return Page ( StarshipDetails, StarshipsList );
};

export default StarshipPage;

