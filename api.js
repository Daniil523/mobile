import Axios from "axios";

export class API {
    static http = Axios.create({
        baseURL: "http://api.openbrewerydb.org/",
    });

    static getBreweries() {
        return API.http.get("breweries");
    }

    static getBrewery(id) {
        return API.http.get(`breweries/${id}`);
    }
}
