import express from 'express'
import { uploadImage } from '../controller/image-controller.js';
import uploads from '../utlis/uplode.js';

const router = express.Router();

router.post('/upload', upload.singal('file')  uploadImage);

export default router;