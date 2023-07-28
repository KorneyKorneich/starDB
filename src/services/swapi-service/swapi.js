export default class SwapiService {

    _baseUrl = "https://swapi.dev/api";
    _imageBase = "https://starwars-visualguide.com/assets/img/";

    async getResours (url) {
        const res = await fetch(`${this._baseUrl}${url}`);
        if(!res.ok) {
            throw new Error(`could not fetch ${this._baseUrl}${url} receved ${res.status}`);
        };
        return await res.json();
    };

    getAllPeople = async () => {
        const res =  await this.getResours(`/people/`);
        return res.results.map(this._transformPerson);
    };
    getPerson = async(id) => {
        const person = await this.getResours(`/people/${id}/`);
        return this._transformPerson(person);
    }

    getPersonImage = ( id ) => {
        return `${this._imageBase}characters/${id}.jpg`;
    };

    getPlanetImage = ( id ) => {
        return `${this._imageBase}planets/${id}.jpg`;
    };
    getStarshipImage = ( id ) => {
        return `${this._imageBase}starsips/${id}.jpg`;
    };

    getAllPlanets = async() => {
        const res = await this.getResours(`/planets/`);
        return res.results.map(this._transformPlanet);
    };
    getPlanet = async(id) => {
        const planet = await this.getResours(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }
    getAllStarships = async() => {
        const res =  await this.getResours(`/starships/`);
        return res.results.map(this._transformStarship);
    };
    getStarship= async (id) => {
        const starship = await this.getResours(`/starships/${id}/`);
        return this._transformStarship(starship);
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
        
    }
    _transformPlanet = (planet) => {

        return{
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    };
    _transformPerson = (person) => {
        return{
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
        }
    };
    _transformStarship = (starship) => {
        return{
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity,
        }
    };
};


