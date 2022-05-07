import express from "express";
import collectionController from './controllers/collectionControllers.js';
import searchController from "./controllers/searchControllers.js";

const router = express.Router();

router.get('/collection', collectionController.getIdList)
router.get('/similars', searchController.searchSimilarById)


export default router;