import searchService from "../services/searchServices.js";

class SearchController {
    async searchSimilarById(req, res) {
        try {
            const { id, top_k } = req.query;
            console.log(id, top_k);
            const response = await searchService.searchSimilarById(id, top_k);
            return res.status(200).json(response.data)
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal service error!' });
        }
    }
}

export default new SearchController()