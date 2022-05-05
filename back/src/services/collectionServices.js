import axios from "axios";

class CollectionService {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://mycelia.azure-api.net',
        })
    }

    getIdList() {
        return this.api.get('/id/productimages?mode=complete', {
            headers: {
                'Auth': process.env.JAI_API_KEY,
                'Content-Type': 'application-json'
            }
        })
    }

}

export default new CollectionService();