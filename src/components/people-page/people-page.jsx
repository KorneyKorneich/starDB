import PersonDetails  from "../sw-components/person-details";
import { PersonList } from "../sw-components/item-lists";
import Page from "./page";

const PlanetPage = () => {
    return Page(PersonDetails, PersonList)
};

export default PlanetPage;