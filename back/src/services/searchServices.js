import axios from "axios";

class SearchService {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://mycelia.azure-api.net',
        })
    }

    searchSimilarById(id, top_k) {
        console.log(id, top_k);
        return this.api.get(`/similar/id/productimages`, {
            params: {
                id,
                top_k
            },
            headers: {
                'Auth': process.env.JAI_API_KEY,
                'Content-Type': 'application-json'
            }
        })
    }

}

export default new SearchService();