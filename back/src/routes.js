import express from "express";
import collectionController from './controllers/collectionController.js';

const router = express.Router();

router.get('/collection', collectionController.getIdList)


export default router;