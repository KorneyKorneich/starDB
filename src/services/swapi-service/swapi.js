export default class SwapiService {

    _baseUrl = "https://swapi.dev/api";

    async getResours (url) {
        const res = await fetch(`${this._baseUrl}${url}`);
        if(!res.ok) {
            throw new Error(`could not fetch ${this._baseUrl}${url} receved ${res.status}`);
        };
        return await res.json();
    };

    async getAllPeople() {
        const res =  await this.getResours(`/people/`);
        return res.results;
    };
    async getPersone(id) {
        return await this.getResours(`/people/${id}/`);
    }
    async getAllPlanets() {
        const res = await this.getResours(`/planets/`);
        return res.results;
    };
    async getPlanet(id) {
        return await this.getResours(`/planets/${id}/`);
    }
    async getAllStarships() {
        const res =  await this.getResours(`/starships/`);
        return res.results;
    };
    async getStarship(id) {
        return await this.getResours(`/starships/${id}/`);
    }
};

const swapi = new SwapiService();


