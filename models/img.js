import  Sequelize from "sequelize";
import db from "../config/db.js";
const {DataTypes} = Sequelize;

const image = db.define('image',{
    nama : {
        type : DataTypes.STRING
    },
    img : {
        type : DataTypes.TEXT
    }
});



export default image;