import express from 'express'
import { uploadImage } from '../controller/imagr-controller.js';

const router = express.Router();

router.post('/upload', middleWare, uploadImage);

export default router;