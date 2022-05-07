import searchService from "../services/searchServices.js";

class SearchController {
    async searchSimilarById(req, res) {
        try {
            const { id, topK } = req.body;
            const response = await searchService.searchSimilarById(id, topK);
            return res.status(200).json(response.data)
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal service error!' });
        }
    }
}

export default new SearchController()