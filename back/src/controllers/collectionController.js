import collectionService from '../services/collectionServices.js';

class CollectionController {
    async getIdList(req, res) {
        try {
            const idList = await collectionService.getIdList();
            console.log(idList.data)
            return res.status(200).json(idList.data)
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'internal error' });
        }
    }
}

export default new CollectionController();