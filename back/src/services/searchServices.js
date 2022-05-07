import axios from "axios";

// https://mycelia.azure-api.net/similar/id/:db_name?id=0&top_k=5

class SearchService {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://mycelia.azure-api.net',
        })
    }

    searchSimilarById(id, topK) {
        console.log(id, topK)
        return this.api.get(`/similar/id/productimages?id=${id}&top_k=${topK}`, {
            headers: {
                'Auth': process.env.JAI_API_KEY,
                'Content-Type': 'application-json'
            }
        })
    }

}

export default new SearchService();