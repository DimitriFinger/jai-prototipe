import collectionService from '../services/collectionServices.js';

class CollectionController {
    async getIdList(req, res) {
        try {
            const response = await collectionService.getIdList();
            return res.status(200).json(response.data)
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal service error!' });
        }
    }
}

export default new CollectionController();