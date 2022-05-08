import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:4000',
});

export const findSimilars = (id, top_k) => {
    return api.get('/similars', { params: { id, top_k } });
}
