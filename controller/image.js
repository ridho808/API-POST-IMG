import image from "../models/img.js";
import cloudinary from '../utils/Cloudnary.js';



export const getimage = async(req,res) =>{
    try {
        const list = await image.findAll()
        res.json(list)
    } catch (error) {
        res.json({msg : "error"})
        console.log(error);
    }
};

export const PostPhoto = async(req,res) =>{
    try {
        const Photo = await cloudinary.uploader.upload(req.file.path);
        
        const {nama} = req.body;
        const post = await image.create({
            nama : nama,
            img : Photo.secure_url
        });
        res.json(post)
    } catch (error) {
        console.log(error)
    }
}