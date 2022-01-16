import upload from '../utils/multer.js'
import  express from "express";
import { getimage, PostPhoto } from "../controller/image.js";

const router = express.Router()

router.get('/',getimage)
router.post('/post',upload.single('img'),PostPhoto)

export default router