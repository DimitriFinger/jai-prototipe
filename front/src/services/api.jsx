// https://mycelia.azure-api.net/id/productimages?mode=complete
import axios from "axios";

export const api = axios.create({
    baseURL: 'https://mycelia.azure-api.net',
});

export const getIdList = async () => {
    return api.get('/id/productimages?mode=simple', {
        headers: {
            'Auth': process.env.REACT_APP_API_KEY,
            'Content-Type': 'application-json'
        }
    })
}
