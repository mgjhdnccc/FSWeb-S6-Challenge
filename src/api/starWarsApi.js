const BASE_URL = "https://swapi.dev/api/";

const makeGetRequest = async (url) => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    try {
        const response = await fetch(url, requestOptions);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    };
}

export let StarWarsApi = {
    getPlanets: async () => {
        return await makeGetRequest(`${BASE_URL}planets/`);
    },
    getPeople: async () => {
        return await makeGetRequest(`${BASE_URL}people/`);
    },
    getPeopleDetails: async (id) => {
        return await makeGetRequest(`${BASE_URL}people/${id}`);
    },
    getFilms: async () => {
        return await makeGetRequest(`${BASE_URL}films/`);
    },
    getFilmDetail: async (id) => {
        return await makeGetRequest(`${BASE_URL}films/${id}`);
    },
    getSpecies: async (id) => {
        return await makeGetRequest(`${BASE_URL}species/${id}}`);
    },
    getVehicles: async (id) => {
        return await makeGetRequest(`${BASE_URL}vehicles/${id}`)
    },
    getStarship: async (id) => {
        return await makeGetRequest(`${BASE_URL}starships/${id}`)
    },
    makeGetRequest : async (url) => {
        return await makeGetRequest(url);
    }

}
